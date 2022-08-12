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
      isLoadin: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === LOGOUT_USER) {
    return { ...state, user: "", token: "" };
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
  throw new Error(`No action of type: ${action.type}`);
};
export default reducer;
