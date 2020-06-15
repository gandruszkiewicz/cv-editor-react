import { alertActions } from './alert.actions';
import spinActions from './spin/spin.action';

export const basicActions = {
    addObject,
    updateStore,
    deleteObject
}

function updateStore(modelObject, resultActions){
    return dispatch => {
        dispatch(resultActions.updateStore({modelObject}));
    }
}

function addObject(modelObject, resultActions, service){
    return dispatch => {
        dispatch(resultActions.requestPost({modelObject}));
        dispatch(spinActions.toggleSpin());
        service.addObject(modelObject)
        .then(
            response => {
                modelObject = {
                    ...modelObject,
                    Id: response.data
                }
                dispatch(spinActions.toggleSpin());
                dispatch(resultActions.successPost({ modelObject }));
            },
            error =>{
                dispatch(resultActions.failurePost(error));
                dispatch(alertActions.error(error));
                dispatch(spinActions.toggleSpin());
            }
        )
    }
}

function deleteObject(id, resultActions, service){
    return dispatch => {
        dispatch(resultActions.requestDelete({id}));
        dispatch(spinActions.toggleSpin());
        service.deleteObject(id)
        .then(
            response => {
                console.log(response);
                dispatch(spinActions.toggleSpin());
                dispatch(resultActions.successDelete({ id }));
            },
            error =>{
                dispatch(resultActions.failureDelete(error));
                dispatch(alertActions.error(error));
                dispatch(spinActions.toggleSpin());
            }
        )
    }
}

export default basicActions;