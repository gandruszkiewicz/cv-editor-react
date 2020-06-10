import qualificationService from '../../services/qualification.service'
import { qualificationResult } from './qualificationResult.action'
import { alertActions } from './../alert.actions';
import spinActions from '../spin/spin.action';

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
        dispatch(spinActions.toggleSpin());
        qualificationService.addQualification(qualification)
        .then(
            response => {
                qualification = {
                    ...qualification,
                    QualificationId: response.data
                }
                dispatch(spinActions.toggleSpin());
                dispatch(qualificationResult.successPost({ qualification }));
            },
            error =>{
                var errors = error?.response ? 
                    error.response.data.errors
                    :new Array(error.message);

                dispatch(qualificationResult.failurePost(errors));
                dispatch(alertActions.error(errors));
                dispatch(spinActions.toggleSpin());
            }
        )
    }
}

export default qualificationActions;