import { skillConstants } from '../../constants/skill.constants';

export const skillResults = {
    requestPost,
    successPost,
    failurePost,

    updateStore,

    requestDelete,
    successDelete,
    failureDelete
}

function requestPost(parameters) 
    { return { type: skillConstants.SKILL_POST_REQUEST, parameters } }
function successPost(parameters) 
    { return { type: skillConstants.SKILL_POST_SUCCESS, parameters } }
function failurePost(error) 
    { return { type: skillConstants.SKILL_POST_FAILURE, error } }

function updateStore(parameters) 
    { return { type: skillConstants.SKILL_STORE_UPDATE, parameters }}

function requestDelete(parameters) 
    { return { type: skillConstants.SKILL_DELETE_REQUEST, parameters } }
function successDelete(parameters) 
    { return { type: skillConstants.SKILL_DELETE_SUCCESS, parameters } }
function failureDelete(parameters) 
    { return { type: skillConstants.SKILL_DELETE_FAILURE, parameters } }