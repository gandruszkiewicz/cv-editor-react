import { qualificationConstants } from '../constants/qualification.constants';



const initState = [
];

   export function qualification(state = initState,action){
    switch (action.type) {
        case qualificationConstants.QUALIFICATION_STORE_UPDATE:
          return AddReturnWithQualificatonId(
            state,action.parameters.qualification);

        case qualificationConstants.QUALIFICATION_POST_REQUEST:
          return AddReturnWithQualificatonId(
            state,action.parameters.qualification);

        case qualificationConstants.QUALIFICATION_POST_SUCCESS:
          return AddReturnWithQualificatonId(
            state,action.parameters.qualification);

        case qualificationConstants.QUALIFICATION_POST_FAILURE:
          return {};

        case qualificationConstants.QUALIFICATION_DELETE_SUCCESS:
          let filteredState = state
            .filter(x => x.QualificationId !== action.parameters.qualificationId);
          return {
            filteredState
          };

        default:
          return state
      }
   }

   function AddReturnWithQualificatonId(state, qualification){
    if(qualification){

    }
    state = [...state, qualification];
    state = state.filter(x => x.QualificationId != null );
    return state
   }