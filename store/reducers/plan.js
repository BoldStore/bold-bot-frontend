import { toast } from "react-toastify";
import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  errmess: null,
  success: false,
  plans: [],
};

const planReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PLANS_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.GET_PLANS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        success: true,
        plans: action.data,
      };

    case ActionTypes.GET_PLANS_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.errmess,
      };

    default:
      return state;
  }
};

export default planReducer;
