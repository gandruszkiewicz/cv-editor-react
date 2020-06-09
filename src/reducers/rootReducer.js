import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alertReducer } from './alert.reducer';
import { resume } from './resume.reducer';
import { experience } from './experience.reducer';
import { qualification } from './qualification.reducer';

const rootReducer = combineReducers({
    authentication,
    alertReducer,
    resume,
    experience,
    qualification
})
export default rootReducer;