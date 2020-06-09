import experienceService from '../../services/experience.service'
import {experienceResult} from './experienceResult.action'
import { alertActions } from './../alert.actions';

export const experienceActions = {
    addExperience,
    updateStore
}

function updateStore(experience){
    return dispatch => {
        dispatch(experienceResult.updateStore({experience}));
    }
}

function addExperience(experience){
    return dispatch => {
        dispatch(experienceResult.requestPost({experience}));
        delete experience.id;
        experienceService.addExperience(experience)
        .then(
            response => {
                experience = {
                    ...experience,
                    ExperienceId: response.data
                }
                dispatch(experienceResult.successPost({ experience }));
            },
            error =>{
                var errors = error.response.data.errors;

                dispatch(experienceResult.failurePost(errors));
                dispatch(alertActions.error(errors));
                dispatch(alertActions.clear(errors));
            }
        )
    }
}

export default experienceActions;