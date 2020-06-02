import { resumeConstants } from '../constants/resume.constants';

const user = JSON.parse(localStorage.getItem('currentUser'));

const initState = {
    UserId: user ? user.userId : null,
    FirstName: null,
    LastName: null,
    Email: null,
    Address: null,
    SumUp: null,
    resumeId: null
   };

   export function resume(state = initState,action){
    switch (action.type) {
        case resumeConstants.RESUME_POST_REQUEST:
          return action.parameters.resume;
        case resumeConstants.RESUME_POST_SUCCESS:
            let resumeId = action.parameters.resumeId;
          return {...state,resumeId}
        case resumeConstants.RESUME_POST_FAILURE:
          return {};
        default:
          return state
      }
   }