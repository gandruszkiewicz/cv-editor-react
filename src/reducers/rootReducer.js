import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alertReducer } from './alert.reducer';

const rootReducer = combineReducers({
    authentication,
    alertReducer
})
export default rootReducer;