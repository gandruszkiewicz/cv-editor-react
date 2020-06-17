import { spinConstants } from '../constants/spin.constants';

const initialState = {
    isSpinning: false
}

export function spin(state = initialState, action) {
  switch (action.type) {
    case spinConstants.TOGGLE_SPIN:
      return {
        isSpinning: !state.isSpinning
      };
    default:
      return state
  }
}