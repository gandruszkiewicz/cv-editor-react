import resumeService from '../../services/resume.service'
import {resumeResult} from './resumeResult.action'
import { alertActions } from './../alert.actions';

export const resumeActions = {
    addResume
}

function addResume(resume){
    return dispatch => {
        dispatch(resumeResult.requestPost({resume}));
        delete resume.resumeId;
        resumeService.addResume(resume)
        .then(
            response => {
                dispatch(resumeResult.successPost({ resumeId: response.data }));
            },
            error =>{
                var errors = error.response.data.errors;

                dispatch(resumeResult.failurePost(errors));
                dispatch(alertActions.error(errors));
                dispatch(alertActions.clear(errors));
            }
        )
    }
}

export default resumeActions;