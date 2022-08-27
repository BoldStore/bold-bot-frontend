import { toast } from "react-toastify";
import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  errmess: null,
  success: false,
  page: null,
};

const pageReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PAGE_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.ADD_PAGE_SUCCESS:
      toast.success("Page add success");
      return {
        ...state,
        isLoading: false,
        errmess: null,
        page: action.page,
        success: true,
      };

    case ActionTypes.ADD_PAGE_FAILED:
      toast.error(action?.errmess?.toString() ?? "Error in adding page");
      return {
        ...state,
        isLoading: false,
        errmess: action.errmess,
      };

    default:
      return state;
  }
};

export default pageReducer;
