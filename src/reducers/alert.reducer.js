import { alertConstants } from '../constants/alert.constants';


const initState = {
  error: null,
  success: null,
  isOpen: false
 };
 
 export function alertReducer(state = initState, action){
    switch(action.type){
      case alertConstants.ERROR:
        return {
          error: action.error,
          success: null,
          isOpen: false
        }
      case alertConstants.CLEAR:
        return {
          error: null,
          success: null,
          isOpen: false
        }
      case action.type.match(/POST_SUCCESS$/)?.input:
        var success = new Array("Element has been added succesfully");
        return {
          error: null,
          success: success,
          isOpen: true
        }
      case action.type.match(/DELETE_SUCCESS$/)?.input:
        var success = new Array("Element has been deleted succesfully");
        return {
          error: null,
          success: success,
          isOpen: true
        }
      default:
        return state;
      
    }
 }