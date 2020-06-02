import {resumeConstants} from '../../constants/resume.constants';

export const resumeResult = {
    requestPost,
    successPost,
    failurePost,
    updateStore
}

function updateStore(parameters) { return { type: resumeConstants.RESUME_STORE_UPDATE, parameters }}
function requestPost(parameters) { return { type: resumeConstants.RESUME_POST_REQUEST, parameters } }
function successPost(parameters) { return { type: resumeConstants.RESUME_POST_SUCCESS, parameters } }
function failurePost(error) { return { type: resumeConstants.RESUME_POST_FAILURE, error } }