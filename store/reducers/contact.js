import { toast } from 'react-toastify';
import * as ActionTypes from '../ActionTypes';

const initState = {
  isLoading: false,
  errmess: null,
  success: false,
};

const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.CONTACT_US_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.CONTACT_US_SUCCESS:
      toast.success('Form Submitted Successfully!', {
        autoClose: 3000,
      });
      return {
        ...state,
        isLoading: false,
        errmess: null,
        success: true,
      };

    case ActionTypes.CONTACT_US_FAILED:
      toast.error(action?.errmess?.toString() ?? 'Error in submiting', {
        autoClose: 3000,
      });

      return {
        ...state,
        isLoading: false,
        errmess: action.errmess,
      };

    default:
      return state;
  }
};

export default contactReducer;
