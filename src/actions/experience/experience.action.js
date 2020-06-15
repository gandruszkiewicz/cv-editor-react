import experienceService from '../../services/experience.service'
import {experienceResult} from './experienceResult.action'
import { alertActions } from './../alert.actions';
import spinActions from '../spin/spin.action';
import BasicActions from '../basic.actions';

export const experienceActions = {
    addExperience,
    deleteExperience,
    updateStore
}

const basicActions = new BasicActions(experienceResult, experienceService)

function updateStore(experience){
    return basicActions.updateStore(experience)
}

function addExperience(experience){
    return basicActions.addObject(experience);
}

function deleteExperience(experienceId){
    return basicActions.deleteObject(experienceId);
}

export default experienceActions;