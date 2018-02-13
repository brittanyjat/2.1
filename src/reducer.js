const initialState = {
    name: '',
    description: '',
    loan: 0,
    monthlyMortgage: 0,
    recommendedRent: 0,
    address: '',
    city: '',
    state: '', 
    zip: '',
    imageUrl: '',
    desiredRent: 0
}

const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';

function reducer(state =  initialState, action){
    switch(action.type){
        case UPDATE_NAME:
            return {...state, name: action.payload}
        case UPDATE_DESCRIPTION:
            return {...state, description: action.payload}
        default:
            return state
    }
}

export default reducer;

export function updateName(value){
    return {
        type: UPDATE_NAME,
        payload: value
    }
};

export function updateDescription(value){
    return {
        type: UPDATE_DESCRIPTION,
        payload: value
    }
};