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
  // user: user,
  token: token,
  product: { productType: "" },
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  const setProductItem = (item, value) => {
    dispatch({ type: SET_PRODUCT_ITEM, payload: { item: item, value: value } });
  };

  return (
    <AppContext.Provider
      value={{ ...state, displayAlert, setupUser, logoutUser, setProductItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, initialState, useAppContext };
