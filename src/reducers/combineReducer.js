import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alertReducer } from './alert.reducer';
import { resume } from './resume.reducer';
import { userResumes } from './userResumes.reducer';
import { experience } from './experience.reducer';
import { qualification } from './qualification.reducer';
import { skill } from './skill.reducer'
import { rootConstants } from '../constants/root.constants';
import { authenticationConstants } from '../constants/authentication.constants';
import { spin } from './spin.reducer';

const combineReducer = combineReducers({
    authentication,
    alertReducer,
    resume,
    userResumes,
    experience,
    qualification,
    skill,
    spin
})
const storeClearingActions = [
    authenticationConstants.LOGOUT,
    rootConstants.ROOT_STORE_CLEAR
]
export default (state, action) => 
combineReducer(storeClearingActions.some(x => x === action.type) ? undefined : state, action);