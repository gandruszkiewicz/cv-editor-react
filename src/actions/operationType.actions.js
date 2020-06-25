import { operationTypeConstants } from '../constants/operationType.constants';
import { operationTypesEnum } from '../helpers/operationTypesEnum'

export const operationTypeActions = {
    changeToEdit,
    changeToAdd
};

function changeToAdd() {
    var operationType = operationTypesEnum.ADD
    return dispatch =>{
        dispatch(add(operationType))
    }
}

function changeToEdit() {
    var operationType = operationTypesEnum.EDIT
    return dispatch =>{
        dispatch(edit(operationType))
    }
}

function add(parameters) { return { type: operationTypeConstants.OPERATION_TYPE_ADD, parameters }}
function edit(parameters) { return { type: operationTypeConstants.OPERATION_TYPE_EDIT, parameters } }
