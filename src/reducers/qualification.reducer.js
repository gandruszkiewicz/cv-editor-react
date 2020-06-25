import { qualificationConstants } from '../constants/qualification.constants';
import { resumeConstants } from '../constants/resume.constants';
import {resumeComponentsConstants} from '../constants/resumeComponents.constants'
import mapper from '../helpers/mapper';
import Qualification from '../model/qualification';


// Array of '../model/qualification' objects
const initState = new Array();

   export function qualification(state = initState,action){
    switch (action.type) {
        case qualificationConstants.QUALIFICATION_STORE_UPDATE:
          return AddReturnWithQualificatonId(
            state,action.parameters.modelObject);

        case qualificationConstants.QUALIFICATION_POST_REQUEST:
          return AddReturnWithQualificatonId(
            state,action.parameters.modelObject);

        case qualificationConstants.QUALIFICATION_POST_SUCCESS:
          return AddReturnWithQualificatonId(
            state,action.parameters.modelObject);

        case qualificationConstants.QUALIFICATION_POST_FAILURE:
          return {};

        case qualificationConstants.QUALIFICATION_DELETE_SUCCESS:
          return state
            .filter(
              x => x.QualificationId !== action.parameters.Id);

        case resumeConstants.RESUME_GET_BYID:
          return action.parameters.qualifications;

        case resumeComponentsConstants.CLEAR_STORES:
          return new Array();

        default:
          return state
      }
   }

   function AddReturnWithQualificatonId(state, qualification){
    state = [...state,  mapper(new Qualification(), qualification)];
    state = state.filter(x => x.Id != null );
    return state
   }