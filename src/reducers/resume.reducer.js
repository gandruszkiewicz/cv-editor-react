import { resumeConstants } from '../constants/resume.constants';
import Resume from '../model/resume';
import mapper from '../helpers/mapper';

const user = JSON.parse(localStorage.getItem('currentUser'));

const initState = new Resume(user?.userId);

   export function resume(state = initState,action){
    switch (action.type) {
        case resumeConstants.RESUME_STORE_UPDATE:
          return mapParametersToResume(action.parameters.modelObject);
        case resumeConstants.RESUME_POST_REQUEST:
          return mapParametersToResume(action.parameters.modelObject);
        case resumeConstants.RESUME_POST_SUCCESS:
            let resumeId = action.parameters.modelObject.Id;
            state.ResumeId = resumeId;
          return state;
        case resumeConstants.RESUME_POST_FAILURE:
          return {};
        default:
          return state
    } 
}
function mapParametersToResume(resume){
  return mapper(new Resume(null),resume);
}