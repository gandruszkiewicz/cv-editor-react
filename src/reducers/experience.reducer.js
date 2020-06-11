import { experienceConstants } from '../constants/experience.constants';



const initState = [
];

   export function experience(state = initState,action){
    switch (action.type) {
        case experienceConstants.EXPERIENCE_STORE_UPDATE:
          return AddReturnWithExperienceId(
            state,action.parameters.experience);

        case experienceConstants.EXPERIENCE_POST_REQUEST:
          return AddReturnWithExperienceId(
            state,action.parameters.experience);

        case experienceConstants.EXPERIENCE_POST_SUCCESS:
          return AddReturnWithExperienceId(
            state,action.parameters.experience);

        case experienceConstants.EXPERIENCE_DELETE_SUCCESS:
          let filteredState = state
            .filter(x => x.ExperienceId !== action.parameters.experienceId);
          return {
            filteredState
          };

        case experienceConstants.EXPERIENCE_POST_FAILURE:
          return {};

        default:
          return state
      }
   }

   function AddReturnWithExperienceId(state, experience){
      if(experience){
      }
      
      state = [...state, experience];
      state = state.filter(x => x.ExperienceId != null );
      return state
   }