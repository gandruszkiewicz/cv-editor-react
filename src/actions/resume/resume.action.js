import resumeService from '../../services/resume.service'
import {resumeResult} from './resumeResult.action'
import { alertActions } from './../alert.actions';
import { spinActions } from '../spin/spin.action';

export const resumeActions = {
    addResume,
    updateStore
}

function updateStore(resume){
    return dispatch => {
        dispatch(resumeResult.updateStore({resume}));
    }
}

function addResume(resume){
    return dispatch => {
        dispatch(resumeResult.requestPost({resume}));
        dispatch(spinActions.toggleSpin());
        delete resume.ResumeId;
        resumeService.addResume(resume)
        .then(
            response => {
                dispatch(resumeResult.successPost({ resumeId: response.data }));
                dispatch(spinActions.toggleSpin());
                dispatch(alertActions.clear());
            },
            error =>{
                var errors = error?.response?.data ? 
                    error.response.data.errors
                    :new Array(error.message);

                dispatch(spinActions.toggleSpin());
                dispatch(alertActions.error(errors));
            }
        )
    }
}

export default resumeActions;