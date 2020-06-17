import { alertActions } from './alert.actions';
import spinActions from './spin/spin.action';

export class BasicActions{
    resultActions;
    service;

    constructor(resultActions, service){
        this.resultActions = resultActions;
        this.service = service;
    }

    updateStore(modelObject){
        return dispatch => {
            dispatch(this.resultActions.updateStore({modelObject}));
        }
    }
    
    addObject(modelObject){
        return dispatch => {
            dispatch(this.resultActions.requestPost({modelObject}));
            dispatch(spinActions.toggleSpin());
            this.service.addObject(modelObject)
            .then(
                response => {
                    modelObject = {
                        ...modelObject,
                        Id: response.data
                    }
                    dispatch(spinActions.toggleSpin());
                    dispatch(this.resultActions.successPost({ modelObject }));
                },
                error =>{
                    dispatch(this.resultActions.failurePost(error));
                    dispatch(alertActions.error(error));
                    dispatch(spinActions.toggleSpin());
                }
            )
        }
    }
    
    deleteObject(id){
        return dispatch => {
            dispatch(this.resultActions.requestDelete({id}));
            dispatch(spinActions.toggleSpin());
            this.service.deleteObject(id)
            .then(
                response => {
                    dispatch(spinActions.toggleSpin());
                    dispatch(this.resultActions.successDelete({ id }));
                },
                error =>{
                    dispatch(this.resultActions.failureDelete(error));
                    dispatch(alertActions.error(error));
                    dispatch(spinActions.toggleSpin());
                }
            )
        }
    }
}

export default BasicActions;