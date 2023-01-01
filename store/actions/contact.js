import instance from '../../axios';
import { CONTACT_US } from '../../constants';
import * as ActionTypes from '../ActionTypes';

export const contactBold = (data) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.CONTACT_US_REQUEST });
    try {
      const response = await instance.post(CONTACT_US, data);
      dispatch({
        type: ActionTypes.CONTACT_US_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.CONTACT_US_FAILED,
        errmess: e.response?.data?.error ?? e,
      });
    }
  };
};
