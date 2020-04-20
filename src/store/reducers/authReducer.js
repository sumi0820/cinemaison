import { LOGIN_SUCCESS, SIGNOUT_SUCCESS } from '../actions/type';

const initState = {
    status: false,
}

const authReducer = (state = initState, action) => {
    switch(action.type){

        case LOGIN_SUCCESS:
            console.log('Login success');
            return {
                ...state,
                status: true
            }

        case SIGNOUT_SUCCESS:
            console.log('Signout Success');
            return {
                ...state,
                status: false
            }

        default:
            return state;
    }
}


export default authReducer;