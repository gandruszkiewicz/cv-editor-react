import {authenticationService} from '../services/authentication.service';

const initState= {
    user: null
}

export const rootReducer = (state = initState, action) => {
    if(action.type === "AUTHENTICATION_LOGIN"){
        
        authenticationService.login(action.email, action.password)
            .then(result =>{
  
                    let user = {
                        token: result.token,
                        userId: result.userId
                    };
                    return {
                        ...state,
                        user: user
                    };
                
            });
    }
    return state;
}

export default rootReducer;