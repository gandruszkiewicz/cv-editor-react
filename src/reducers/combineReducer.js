import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alertReducer } from './alert.reducer';
import { resume } from './resume.reducer';
import { experience } from './experience.reducer';
import { qualification } from './qualification.reducer';
import { rootConstants } from '../constants/root.constants';

const combineReducer = combineReducers({
    authentication,
    alertReducer,
    resume,
    experience,
    qualification
})

export default (state, action) => 
combineReducer(action.type === rootConstants.ROOT_STORE_CLEAR ? undefined : state, action);