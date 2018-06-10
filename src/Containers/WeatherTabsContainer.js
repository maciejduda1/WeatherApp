import { connect } from 'react-redux';
import WeatherTabs from '../Presentational/WeatherTabs';
import { searchDatabase } from '../actions';

const mapStateToProps = (state) => ({
    searchResults: state.searchResults,
    cityPicked: state.cityPicked,
});

const mapDispatchToProps = (dispatch) => ({
    searchDatabase: (cityPicked) => dispatch(searchDatabase(cityPicked)),
});

export default connect( mapStateToProps, mapDispatchToProps )(WeatherTabs);
