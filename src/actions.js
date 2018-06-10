const GET_RESPONSE_DONE ='GET_RESPONSE_DONE';
const GET_RESPONSE_FAILED = 'GET_RESPONSE_FAILED';
const SHOW_WEATHER = 'SHOW_WEATHER';


function showWeather() {
    return {
        type: SHOW_WEATHER,
    }
}

function getResponseFailed(error) {
    return {
        type:GET_RESPONSE_FAILED,
        error,
    }
}

function getResponseDone(data, cityPicked, index) {
    return {
        type: GET_RESPONSE_DONE,
        data,
        cityPicked,
        index,
    }
}

function pickCitys() {
    const cityTable= ['Lodz', 'Warszawa', 'Berlin', 'New York', 'Londyn'];
    let cityPicked = [];
    for (let i = 0; i < 3; i++) {
        cityPicked = cityPicked.concat(cityTable.splice(getRandomIndex(cityTable), 1));
    }
    return cityPicked
}

function searchDatabase(cityPicked = pickCitys()) {
    
    return dispatch => {
            cityPicked.map((city, index) => { 
            const searchedText = "select item from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'";
            const URL = 'https://query.yahooapis.com/v1/public/yql?q=' + searchedText + '&format=json'; 
            fetch(URL)
            .then((res) => {
                if (res.status) {
                  return res.json();
                } 
                dispatch(getResponseFailed(Error));
                throw new Error('błąd w połączeniu');
                })
            .then(data => dispatch(getResponseDone(data, cityPicked, index)))
            .catch(error => dispatch(getResponseFailed(error))) 
        })    
    }
}

function getRandomIndex(items) {
  return Math.floor(Math.random() * items.length);
}

export { GET_RESPONSE_DONE, GET_RESPONSE_FAILED, SHOW_WEATHER, showWeather, searchDatabase };
