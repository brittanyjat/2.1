import axios from 'axios';

const initialState = {
    name: '',
    description: '',
    loan: null,
    monthlyMortgage: null,
    address: '',
    city: '',
    state: '',
    zip: '',
    imageUrl: '',
    desiredRent: 0,
    recommended: null
}

const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_LOAN = 'UPDATE_LOAN';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_DESIRED_RENT = 'UPDATE_DESIRED_RENT';
const REGISTER = 'REGISTER';
const LOGIN = 'LOGIN';
const CLEAR_STATE = 'CLEAR_STATE';

function reducer(state = initialState, action) {
    // console.log(state);
    switch (action.type) {
        case UPDATE_NAME:
            return { ...state, name: action.payload }
        case UPDATE_DESCRIPTION:
            return { ...state, description: action.payload }
        case UPDATE_ADDRESS:
            return { ...state, address: action.payload }
        case UPDATE_CITY:
            return { ...state, city: action.payload }
        case UPDATE_STATE:
            return { ...state, state: action.payload }
        case UPDATE_ZIP:
            return { ...state, zip: action.payload }
        case UPDATE_IMG:
            return { ...state, imageUrl: action.payload }
        case UPDATE_LOAN:
            return { ...state, loan: action.payload }
        case UPDATE_MORTGAGE:
            return { ...state, monthlyMortgage: action.payload, recommended: action.payload * 1.25 }
        case UPDATE_DESIRED_RENT:
            return { ...state, desiredRent: action.payload }
        case CLEAR_STATE:
            return Object.assign({}, state, initialState);
        default:
            return state
    }
}

export default reducer;

export function clearState(){
    return {
        type: CLEAR_STATE
    }
}

export function updateName(value) {
    return {
        type: UPDATE_NAME,
        payload: value
    }
};

export function updateDescription(value) {
    return {
        type: UPDATE_DESCRIPTION,
        payload: value
    }
};

export function updateAddress(value) {
    return {
        type: UPDATE_ADDRESS,
        payload: value
    }
};

export function updateCity(value) {
    return {
        type: UPDATE_CITY,
        payload: value
    }
};

export function updateState(value) {
    return {
        type: UPDATE_STATE,
        payload: value
    }
};

export function updateZip(value) {
    return {
        type: UPDATE_ZIP,
        payload: value
    }
};

export function updateImg(value) {
    return {
        type: UPDATE_IMG,
        payload: value
    }
};

export function updateLoan(value) {
    return {
        type: UPDATE_LOAN,
        payload: value
    }
};

export function updateMortgage(value) {
    return {
        type: UPDATE_MORTGAGE,
        payload: value
    }
};

export function updateDesired(value) {
    return {
        type: UPDATE_DESIRED_RENT,
        payload: value
    }
}

export function register({ username, password }, history) {
    let body = {
        username: username,
        password: password
    }
    const promise = axios.post('/api/register', body).then(res => {
        history.push('/dashboard');
        return res.data;
    });

    return {
        type: REGISTER,
        payload: promise
    }
}

export function login({ username, password }, history) {
    let body = {
        username: username,
        password: password
    }
    const promise = axios.post('/api/users', body).then(response => {
        history.push('/dashboard');
        return response.data;
    });

    return {
        type: LOGIN,
        payload: promise
    }
}
