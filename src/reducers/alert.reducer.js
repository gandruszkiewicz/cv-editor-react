import { alertConstants } from '../constants/alert.constants';


const initState = {
  error: null,
  success: null,
  isOpen: false
 };
 
 export function alertReducer(state = initState, action){
  const { error } = action;
 
  if(error){
    return {
      error: error,
      success : null,
      isOpen: true
    }
  }else if(action.type === alertConstants.CLEAR){
    return {
      error: null,
      success: null,
      isOpen: false
    }
  }else if(action.type.match(/POST_SUCCESS$/) != null){
    let success = new Array("Element has been added succesfully");
    return {
      error: null,
      success: success,
      isOpen: true
    }
  }

 
  return state;
 }