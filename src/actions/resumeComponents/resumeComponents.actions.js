import { resumeComponentsConstants } from '../../constants/resumeComponents.constants';

export const resumeComponentsActions = {
    clearStores
};

function clearStores() {
    return dispatch =>{
        dispatch(clear())
    }
}

function clear() { return { type: resumeComponentsConstants.CLEAR_STORES }}
