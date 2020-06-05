import { experienceConstants } from '../constants/experience.constants';



const initState = {
    Id: null,
    ResumeId: null,
    CompanyName: null,
    City: null,
    Position: null,
    DateFrom: null,
    DateTo: null,
    Description: null
   };

   export function experience(state = initState,action){
    switch (action.type) {
        case experienceConstants.EXPERIENCE_STORE_UPDATE:
          return action.parameters.resume;

        case experienceConstants.EXPERIENCE_POST_REQUEST:
          return action.parameters.resume;

        case experienceConstants.EXPERIENCE_POST_SUCCESS:
            let resumeId = action.parameters.resumeId;
          return {...state,resumeId}

        case experienceConstants.EXPERIENCE_POST_FAILURE:
          return {};

        default:
          return state
      }
   }