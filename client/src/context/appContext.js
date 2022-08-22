import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER,
  SET_PRODUCT_ITEM,
  SET_OBJECT_PAIR,
  SET_COCKTAIL_INGREDIENTS,
  REMOVE_COCKTAIL_INGREDIENTS,
  ADD_PRODUCT_BEGIN,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  CLEAR_VALUES,
  GET_ALL_PRODUCTS,
  SET_SHOW_CARDS,
  SET_IS_EDITING,
  EDIT_PRODUCT_BEGIN,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
  GET_ALL_PRODUCTS_BEGIN,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_ERROR,
  GET_INVENTORIES_BEGIN,
  GET_INVENTORIES_SUCCESS,
  GET_INVENTORIES_ERROR,
  UPDATE_INVENTORIES_BEGIN,
  SET_INVENTORY_PAIR,
} from "./actions";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

const initialState = {
  name: "",
  email: "",
  password: "",
  showAlert: false,
  alertType: "",
  alertText: "",
  isLoading: false,
  user: user ? JSON.parse(user) : null,
  sort: "",
  search: "",
  showCards: true,
  isEditing: false,
  // user: user,
  token: token,
  productType: "all",
  beer: {
    notes: "",
    name: "",
    producer: "",
    style: "",
    region: "",
    abv: "",
    stock: "",
  },
  cocktail: {
    name: "",
    instructions: "",
    ingredients: {
      amount: ["0", "0", "0"],
      ingredient: ["", "", ""],
    },
    inspiration: "",
  },
  wine: {
    notes: "",
    name: "",
    producer: "",
    region: "",
    varietal: "",
    color: "",
    vintage: "",
    stock: "",
  },
  spirit: {
    notes: "",
    name: "",
    producer: "",
    region: "",
    type: "",
    stock: "",
  },
  products: [],
  beers: [],
  cocktails: [],
  spirits: [],
  wines: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //axios
  const authFetch = axios.create({
    baseURL: "api/v1",
  });
  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  //response
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 401) {
        console.log("AUTH ERROR");
        logoutUser();
      }
      return Promise.reject(error);
    }
  );
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const response = await axios.post(
        `/api/v1/auth/${endPoint}`,
        currentUser
      );
      const { user, token } = response.data;
      addUserToLocalStorage({ user, token });
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, alertText: alertText },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch({ type: LOGOUT_USER });
  };

  const setShowCards = (bool) => {
    dispatch({ type: SET_SHOW_CARDS, payload: { bool: bool } });
  };

  const setItem = (item, value) => {
    dispatch({ type: SET_PRODUCT_ITEM, payload: { item: item, value: value } });
  };

  const setObjectPair = (object, { name, value }) => {
    dispatch({
      type: SET_OBJECT_PAIR,
      payload: { object: object, name: name, value: value },
    });
  };

  const setCocktailIngredients = (name, value, index) => {
    const arr = state.cocktail.ingredients[name];
    arr.splice(index, 1, value);
    dispatch({
      type: SET_COCKTAIL_INGREDIENTS,
      payload: { name: name, array: arr },
    });
  };

  const removeCocktailIngredients = (name, index) => {
    const arr = state.cocktail.ingredients[name];
    arr.splice(index, 1);
    dispatch({
      type: REMOVE_COCKTAIL_INGREDIENTS,
      payload: { name: name, array: arr },
    });
  };

  const clearValues = () => {
    const { beer, spirit, wine } = initialState;
    const cocktail = {
      name: "",
      instructions: "",
      ingredients: {
        amount: ["0", "0", "0"],
        ingredient: ["", "", ""],
      },
      inspiration: "",
    };

    dispatch({
      type: CLEAR_VALUES,
      payload: { beer: beer, cocktail: cocktail, spirit: spirit, wine: wine },
    });
  };

  const addProduct = async (productObject) => {
    dispatch({ type: ADD_PRODUCT_BEGIN });
    try {
      const response = await authFetch.post(
        "/products/add-product",
        productObject
      );
      dispatch({ type: ADD_PRODUCT_SUCCESS });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ADD_PRODUCT_ERROR,
        payload: { msg: error.response.data },
      });
    }
    clearValues();
    clearAlert();
  };

  const getAllProducts = async () => {
    dispatch({ type: GET_ALL_PRODUCTS_BEGIN });
    const { productType, sort, search } = state;
    let url = `/products?productType=${productType}&sort=${sort}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    try {
      const response = await authFetch.get(url);
      const { data } = response;

      dispatch({
        type: GET_ALL_PRODUCTS_SUCCESS,
        payload: { products: data.products },
      });
    } catch (error) {
      dispatch({ type: GET_ALL_PRODUCTS_ERROR, payload: { msg: error } });
      console.log(error);
    }
  };

  const setIsEditing = (bool) => {
    dispatch({ type: SET_IS_EDITING, payload: { bool: bool } });
  };

  const editProduct = (product) => {
    dispatch({ type: EDIT_PRODUCT_BEGIN });

    try {
      const response = authFetch.patch(`/products/${product.name}`, product);
      console.log(response);
      dispatch({ type: EDIT_PRODUCT_SUCCESS });
    } catch (error) {
      dispatch({
        type: EDIT_PRODUCT_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearValues();
    clearAlert();
  };

  const getInventories = async () => {
    dispatch({ type: GET_INVENTORIES_BEGIN });
    try {
      // const { data } = await authFetch.get("/products/inventory");

      // const { beers, cocktails, spirits, wines } = data;
      const { data } = await authFetch.get("/products?productType=all");
      const { products } = data;

      const beers = products.filter((prod) => prod.productType === "beer");
      const cocktails = products.filter(
        (prod) => prod.productType === "cocktail"
      );
      const spirits = products.filter((prod) => prod.productType === "spirit");
      const wines = products.filter((prod) => prod.productType === "wine");

      dispatch({
        type: GET_INVENTORIES_SUCCESS,
        payload: {
          beers: beers,
          cocktails: cocktails,
          spirits: spirits,
          wines: wines,
        },
      });
    } catch (error) {
      dispatch({ type: GET_INVENTORIES_ERROR });
      console.log(error);
    }
  };

  const setInventoryPair = (productInventory, name, value, index) => {
    dispatch({
      type: SET_INVENTORY_PAIR,
      payload: {
        productInventory: productInventory,
        name: name,
        value: value,
        index: index,
      },
    });
  };

  const updateInventories = async () => {
    dispatch({ type: UPDATE_INVENTORIES_BEGIN });
    const { beers, spirits, wines } = state;

    try {
      const response = await authFetch.patch("/products/inventory", {
        beers: beers,
        spirits: spirits,
        wines: wines,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProductFromInventory = async (product) => {
    try {
      const response = await authFetch.patch("/products", product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setupUser,
        logoutUser,
        setItem,
        setObjectPair,
        setCocktailIngredients,
        removeCocktailIngredients,
        addProduct,
        clearValues,
        getAllProducts,
        setShowCards,
        setIsEditing,
        editProduct,
        getInventories,
        updateInventories,
        setInventoryPair,
        updateProductFromInventory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, initialState, useAppContext };
