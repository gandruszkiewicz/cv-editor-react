import qualificationService from '../../services/qualification.service'
import { qualificationResult } from './qualificationResult.action'
import { alertActions } from './../alert.actions';

export const qualificationActions = {
    addQualification,
    updateStore
}

function updateStore(qualification){
    return dispatch => {
        dispatch(qualificationResult.updateStore({qualification}));
    }
}

function addQualification(qualification){
    return dispatch => {
        dispatch(qualificationResult.requestPost({qualification}));
        // delete qualification.id;
        qualificationService.addQualification(qualification)
        .then(
            response => {
                qualification = {
                    ...qualification,
                    QualificationId: response.data
                }
                dispatch(qualificationResult.successPost({ qualification }));
            },
            error =>{
                var errors = error?.response ? 
                    error.response.data.errors
                    :new Array(error.message);

                dispatch(qualificationResult.failurePost(errors));
                dispatch(alertActions.error(errors));
                dispatch(alertActions.clear(errors));
            }
        )
    }
}

export default qualificationActions;