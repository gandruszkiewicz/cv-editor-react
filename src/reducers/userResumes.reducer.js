import { resumeConstants } from '../constants/resume.constants';
import Resume from '../model/resume';
import mapper from '../helpers/mapper';

const user = JSON.parse(localStorage.getItem('currentUser'));

const initState = new Array();

   export function userResumes(state = initState,action){
    switch (action.type) {
        case resumeConstants.USER_RESUMES_GET:
            return mapParametersToResumes(action.parameters);
        default:
          return state
    } 
}
function mapParametersToResumes(resumes, state){
    let mappedResumes = new Array();

    if(resumes){
        resumes.map(resume => 
            mappedResumes
            .push(mapper(new Resume(null),resume)));
    
        return resumes;
    }

    return state;
}