import qualificationService from '../../services/qualification.service'
import { qualificationResult } from './qualificationResult.action'
import { alertActions } from './../alert.actions';
import spinActions from '../spin/spin.action';
import BasicActions from '../basic.actions';

export const qualificationActions = {
    addQualification,
    updateStore,
    deleteQualification
}

const basicActions = new BasicActions(qualificationResult, qualificationService);

function updateStore(qualification){
    return basicActions.updateStore(qualification);
}

function addQualification(qualification){
    return basicActions.addObject(qualification)
}

function deleteQualification(qualificationId){
    return basicActions.deleteObject(qualificationId)
}

export default qualificationActions;