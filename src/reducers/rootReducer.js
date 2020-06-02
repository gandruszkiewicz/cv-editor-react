import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alertReducer } from './alert.reducer';
import { resume } from './resume.reducer';

const rootReducer = combineReducers({
    authentication,
    alertReducer,
    resume
})
export default rootReducer;