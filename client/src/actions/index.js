import axios from 'axios';
import { FETCH_USER } from './types';

// dispatch action only when we finish fetch user
export const fetchUser = () => async dispatch => {
  const { data } = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: data });
};
