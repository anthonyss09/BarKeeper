import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { DISPLAY_ALERT, CLEAR_ALERT, SETUP_USER_BEGIN } from "./actions";

const initialState = {
  name: "",
  email: "",
  password: "",
  showAlert: false,
  alertType: "",
  alertText: "",
  isLoading: false,
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
  const setupUser = (endPoint) => {
    dispatch({ type: SETUP_USER_BEGIN });
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, initialState, useAppContext };
