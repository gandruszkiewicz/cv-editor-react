import { experienceConstants } from '../constants/experience.constants';



const initState = [
];

   export function experience(state = initState,action){
    switch (action.type) {
        case experienceConstants.EXPERIENCE_STORE_UPDATE:
          return action.parameters.experience;

        case experienceConstants.EXPERIENCE_POST_REQUEST:
          return action.parameters.experience;

        case experienceConstants.EXPERIENCE_POST_SUCCESS:
            let experienceId = action.parameters.experience.id;
          return {...state,experienceId}

        case experienceConstants.EXPERIENCE_POST_FAILURE:
          return {};

        default:
          return state
      }
   }