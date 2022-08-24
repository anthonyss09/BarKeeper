import { initialState } from "./appContext";
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
  CLEAR_VALUES,
  ADD_PRODUCT_BEGIN,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
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
  UPDATE_INVENTORIES_SUCCESS,
  UPDATE_INVENTORIES_ERROR,
  SET_INVENTORY_PAIR,
  REMOVE_PRODUCT_BEGIN,
  REMOVE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_ERROR,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return { ...state, showAlert: false, alertType: "", alertText: "" };
  }
  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === LOGOUT_USER) {
    return { ...state, user: "", token: "" };
  }
  if (action.type === SET_SHOW_CARDS) {
    return { ...state, showCards: action.payload.bool };
  }
  if (action.type === SET_OBJECT_PAIR) {
    return {
      ...state,
      [action.payload.object]: {
        ...state[action.payload.object],
        [action.payload.name]: action.payload.value,
      },
    };
  }
  if (action.type === SET_PRODUCT_ITEM) {
    return {
      ...state,
      [action.payload.item]: action.payload.value,
    };
  }
  if (action.type === SET_COCKTAIL_INGREDIENTS) {
    return {
      ...state,
      cocktail: {
        ...state.cocktail,
        ingredients: {
          ...state.cocktail.ingredients,
          [action.payload.name]: [...action.payload.array],
        },
      },
    };
  }
  if (action.type === REMOVE_COCKTAIL_INGREDIENTS) {
    return {
      ...state,
      cocktail: {
        ...state.cocktail,
        ingredients: {
          ...state.cocktail.ingredients,
          [action.payload.name]: [...action.payload.array],
        },
      },
    };
  }
  if (action.type === ADD_PRODUCT_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === ADD_PRODUCT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Succesfully added product...",
    };
  }
  if (action.type === ADD_PRODUCT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === CLEAR_VALUES) {
    return {
      ...state,
      beer: action.payload.beer,
      cocktail: { ...action.payload.cocktail },
      spirit: action.payload.spirit,
      wine: action.payload.wine,
    };
  }
  if (action.type === GET_ALL_PRODUCTS_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_ALL_PRODUCTS_SUCCESS) {
    return { ...state, products: action.payload.products, isLoading: false };
  }
  if (action.type === GET_ALL_PRODUCTS_ERROR) {
    return { ...state, isLoading: false };
  }
  if (action.type === SET_IS_EDITING) {
    return { ...state, isEditing: action.payload.bool };
  }
  if (action.type === EDIT_PRODUCT_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === EDIT_PRODUCT_SUCCESS) {
    return {
      ...state,
      isEditing: false,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Successfully edited product...",
    };
  }
  if (action.type === EDIT_PRODUCT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_INVENTORIES_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_INVENTORIES_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      beers: action.payload.beers,
      cocktails: action.payload.cocktails,
      spirits: action.payload.spirits,
      wines: action.payload.wines,
    };
  }
  if (action.type === GET_INVENTORIES_ERROR) {
    return { ...state, isLoading: false };
  }
  if (action.type === REMOVE_PRODUCT_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === REMOVE_PRODUCT_SUCCESS) {
    return {
      ...state,
      showAlert: true,
      alertType: "success",
      alertText: "Successfully removed product...",
    };
  }
  if (action.type === REMOVE_PRODUCT_ERROR) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  throw new Error(`No action of type: ${action.type}`);
};
export default reducer;
