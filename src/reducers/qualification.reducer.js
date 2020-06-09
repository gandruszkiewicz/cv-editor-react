import { qualificationConstants } from '../constants/qualification.constants';



const initState = [
];

   export function qualification(state = initState,action){
    switch (action.type) {
        case qualificationConstants.QUALIFICATION_STORE_UPDATE:
          return AddReturnWithExperienceId(
            state,action.parameters.qualification);

        case qualificationConstants.QUALIFICATION_POST_REQUEST:
          return AddReturnWithExperienceId(
            state,action.parameters.qualification);

        case qualificationConstants.QUALIFICATION_POST_SUCCESS:
          return AddReturnWithExperienceId(
            state,action.parameters.qualification);

        case qualificationConstants.QUALIFICATION_POST_FAILURE:
          return {};

        default:
          return state
      }
   }

   function AddReturnWithExperienceId(state, qualification){
    if(qualification){

    }
    state = [...state, qualification];
    state = state.filter(x => x.QualificationId != null );
    return state
   }