import { alertConstants } from '../constants/alert.constants';


const initState = {
  error: null,
  isOpen: false
 };
 
 export function alertReducer(state = initState, action){
  const { error } = action;
 
  if(error){
    return {
      error: error,
      isOpen: true
    }
  }else if(action.type === alertConstants.CLEAR){
    return {
      error: null,
      isOpen: false
    }
  }
 
  return state;
 }