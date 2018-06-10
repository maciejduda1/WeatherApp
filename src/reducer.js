import { SHOW_WEATHER, GET_RESPONSE_DONE } from './actions';

const initialState = {
    appStarted: false,
    searchResults: [],
    cityPicked: []
};

function appReducer (state = initialState, action) {
    switch (action.type) {
        case SHOW_WEATHER:
            return Object.assign({}, state, { appStarted: true });
        case GET_RESPONSE_DONE:
            if (state.searchResults[2] !== undefined) {
                const newState = state.searchResults.map((data, index) => {return index === action.index ? Object.assign({}, data, action.data) : data });
                return Object.assign({}, state, { searchResults: newState, appStarted: true, cityPicked: action.cityPicked} );
            }
            return Object.assign({}, state, {searchResults: [...state.searchResults, action.data], appStarted: true, cityPicked: [...state.cityPicked, action.data.query.results.channel.item.title.split('for ').pop().split(',').shift() ]});
        default: 
            return state
    }
}

export default appReducer;
