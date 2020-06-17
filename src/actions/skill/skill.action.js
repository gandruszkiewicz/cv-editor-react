import skillService from '../../services/skill.service'
import { skillResults } from './skillResults.action'
import { BasicActions } from '../basic.actions';

export const skillActions = {
    addSkill,
    updateStore,
    deleteSkill
}
const basicActions = new BasicActions(skillResults, skillService);

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