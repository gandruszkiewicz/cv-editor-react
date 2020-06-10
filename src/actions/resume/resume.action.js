import resumeService from '../../services/resume.service'
import {resumeResult} from './resumeResult.action'
import { alertActions } from './../alert.actions';

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
        delete resume.ResumeId;
        resumeService.addResume(resume)
        .then(
            response => {
                dispatch(resumeResult.successPost({ resumeId: response.data }));
                dispatch(alertActions.clear());
            },
            error =>{
                var errors = error?.response ? 
                    error.response.data.errors
                    :new Array(error.message);

                dispatch(resumeResult.failurePost(errors));
                dispatch(alertActions.error(errors));
                dispatch(alertActions.clear(errors));
            }
        )
    }
}

export default resumeActions;