import resumeService from '../../services/resume.service'
import {resumeResult} from './resumeResult.action'
import { alertActions } from './../alert.actions';
import { spinActions } from '../spin/spin.action';
import BasicActions from '../basic.actions';

export const resumeActions = {
    addResume,
    updateStore,
    readUserResumes,
    getById
}

const basicActions = new BasicActions(resumeResult, resumeService);

function updateStore(resume){
    return basicActions.updateStore(resume);
}

function addResume(resume){
    delete resume.ResumeId;
    return basicActions.addObject(resume);
}

function getById(resumeId){
    return dispatch =>{
        dispatch(spinActions.toggleSpin());
        resumeService.getByResumeId(resumeId)
            .then(response =>{
                dispatch(resumeResult.getByResumeId(response.data))
            },
            error => {
                dispatch(alertActions.error(error));
            })

        dispatch(spinActions.toggleSpin());
    }
}

function readUserResumes(){
    return dispatch =>{
        dispatch(spinActions.toggleSpin());
        resumeService.getAllByUser()
            .then(response =>{
                dispatch(resumeResult.userResumesGet(response.data))
            },
            error =>{
                dispatch(alertActions.error(error));
            })
            
        dispatch(spinActions.toggleSpin());
    }
}

export default resumeActions;