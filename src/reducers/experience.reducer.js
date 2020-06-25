import { experienceConstants } from '../constants/experience.constants';
import { resumeConstants } from '../constants/resume.constants';
import Experience from '../model/experience';
import mapper from '../helpers/mapper';
import { resumeComponentsConstants } from '../constants/resumeComponents.constants';


// Array of '../model/experience' objects
const initState = new Array();

   export function experience(state = initState,action){
    switch (action.type) {
        case experienceConstants.EXPERIENCE_STORE_UPDATE:
          return AddReturnWithExperienceId(
            state,action.parameters.modelObject);

        case experienceConstants.EXPERIENCE_POST_REQUEST:
          return AddReturnWithExperienceId(
            state,action.parameters.modelObject);

        case experienceConstants.EXPERIENCE_POST_SUCCESS:
          return AddReturnWithExperienceId(
            state,action.parameters.modelObject);

        case experienceConstants.EXPERIENCE_DELETE_SUCCESS:
          return state
          .filter(x => x.Id !== action.parameters.modelObject.Id);

        case resumeConstants.RESUME_GET_BYID:
          return action.parameters.experiences;

        case resumeComponentsConstants.CLEAR_STORES:
          return new Array();

        case experienceConstants.EXPERIENCE_POST_FAILURE:
          return {};

        default:
          return state
      }
   }

   function AddReturnWithExperienceId(state, experience){      
      state = [...state, mapper(new Experience(),experience)];
      state = state.filter(x => x.Id != null );
      return state
   }