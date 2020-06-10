import experienceService from '../../services/experience.service'
import {experienceResult} from './experienceResult.action'
import { alertActions } from './../alert.actions';
import spinActions from '../spin/spin.action';

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
        dispatch(spinActions.toggleSpin());
        experienceService.addExperience(experience)
        .then(
            response => {
                experience = {
                    ...experience,
                    ExperienceId: response.data
                }
                dispatch(spinActions.toggleSpin());
                dispatch(experienceResult.successPost({ experience }));
            },
            error =>{
                var errors = error?.response ? 
                    error.response.data.errors
                    :new Array(error.message);

                dispatch(experienceResult.failurePost(errors));
                dispatch(alertActions.error(errors));
                dispatch(spinActions.toggleSpin());
            }
        )
    }
}

export default experienceActions;