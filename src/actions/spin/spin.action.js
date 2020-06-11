import {spinResult} from './spinResult.action';

export const spinActions = {
    toggleSpin
}

function toggleSpin(){
    return dispatch => {
        dispatch(spinResult.toggleSpin());
    }
}

export default spinActions;