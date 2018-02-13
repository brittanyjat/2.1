const initialState = {
    name: '',
    description: '',
    loan: null,
    monthlyMortgage: null,
    recommendedRent: null,
    address: '',
    city: '',
    state: '',
    zip: '',
    imageUrl: '',
    desiredRent: 0
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

function reducer(state = initialState, action) {
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
            return { ...state, monthlyMortgage: action.payload }
        case UPDATE_DESIRED_RENT:
            return { ...state, desiredRent: action.payload }
        default:
            return state
    }
}

export default reducer;

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