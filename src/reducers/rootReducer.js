import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alertReducer } from './alert.reducer';
import { resume } from './resume.reducer';
import { experience } from './experience.reducer';

const rootReducer = combineReducers({
    authentication,
    alertReducer,
    resume,
    experience
})
export default rootReducer;