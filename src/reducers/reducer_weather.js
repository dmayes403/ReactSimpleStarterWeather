import { FETCH_WEATHER } from '../actions/index.js'

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER: 
            return [action.payload.data, ...state];
            // you never want to manipulate current state. Always return a new state.
    }
    return state;
}