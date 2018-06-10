import { connect } from 'react-redux';
import App from '../App';
import { searchDatabase } from '../actions';

const mapStateToProps = (state) => ({
    appStarted: state.appStarted,
    cityPicked: state.cityPicked,
});

const mapDispatchToProps = (dispatch) => ({
    searchDatabase: (cityPicked) => dispatch(searchDatabase(cityPicked)),
});

export default connect( mapStateToProps, mapDispatchToProps )(App);
