import React, { Component } from 'react';
import './App.css';
import WeatherTabs from '../src/Containers/WeatherTabsContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  startApp() {
    this.props.searchDatabase()
    this.interval = setInterval(()=> {
      this.props.searchDatabase();
    }, 59900);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.props.appStarted) {
      return (
        <div className="App">
          <WeatherTabs/>
        </div>
      );
    }
    return (
      <div className="App">
        <button onClick={ () => this.startApp() }> Show Weather </button>
      </div>
    );  
  }  
}

export default App;
