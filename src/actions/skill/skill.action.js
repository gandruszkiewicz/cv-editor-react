import skillService from '../../services/skill.service'
import { skillResults } from './skillResults.action'
import { alertActions } from './../alert.actions';
import spinActions from '../spin/spin.action';
import { basicActions } from '../basic.actions';

export const skillActions = {
    addSkill,
    updateStore,
    deleteSkill
}

function updateStore(qualification){
    return basicActions.updateStore(qualification,skillResults);
}

function addSkill(qualification){
    return basicActions.addObject(qualification,skillResults,skillService)
}

function deleteSkill(qualificationId){
    return basicActions.deleteObject(qualificationId,skillResults,skillService)
}

export default skillActions;