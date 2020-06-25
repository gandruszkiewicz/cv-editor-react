import { operationTypeConstants } from '../constants/operationType.constants';

const initState = "add";

   export function operationType(state = initState,action){
    switch (action.type) {
        case operationTypeConstants.OPERATION_TYPE_EDIT:
          return action.parameters;
        case operationTypeConstants.OPERATION_TYPE_ADD:
          return action.parameters;
        default:
          return state
    } 
}