import { skillConstants } from '../constants/skill.constants';
import mapper from '../helpers/mapper';
import Skill from '../model/skill';


// Array of '../model/skill' objects
const initState = new Array();

   export function skill(state = initState,action){
    switch (action.type) {
        case skillConstants.SKILL_STORE_UPDATE:
          return AddReturnWithSkillId(
            state,action.parameters.modelObject);

        case skillConstants.SKILL_POST_REQUEST:
          return AddReturnWithSkillId(
            state,action.parameters.modelObject);

        case skillConstants.SKILL_POST_SUCCESS:
          return AddReturnWithSkillId(
            state,action.parameters.modelObject);

        case skillConstants.SKILL_POST_FAILURE:
          return {};

        case skillConstants.SKILL_DELETE_SUCCESS:
          return state
          .filter(x => x.SkillId !== action.parameters.skillId);

        default:
          return state
      }
   }

   function AddReturnWithSkillId(state, skill){
    state = [...state,  mapper(new Skill(), skill)];
    state = state.filter(x => x.Id != null );
    return state
   }