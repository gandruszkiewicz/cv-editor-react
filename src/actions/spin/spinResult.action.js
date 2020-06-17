import {spinConstants} from '../../constants/spin.constants';

export const spinResult = {
    toggleSpin
}

function toggleSpin(parameters) { return { type: spinConstants.TOGGLE_SPIN }}