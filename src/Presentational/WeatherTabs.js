import React, { Component } from 'react';

//const WeatherTabs = (props) => 
class WeatherTabs extends Component {
    constructor(props) {
      super(props);
    }
    
    componentDidMount() {
        this.intervalCityWeatherUpdate = setInterval( () => {
            this.props.searchDatabase(this.props.cityPicked);
        }, 10000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalCityWeatherUpdate);
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    {this.props.searchResults.map( (result, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <h2>{result.query.results.channel.item.title}</h2>
                                <p>Temperature: {result.query.results.channel.item.condition.temp} °C</p>
                                <p>Conditions: {result.query.results.channel.item.condition.text} </p>
                                <img src={result.query.results.channel.item.description.split('src="').pop().split('"/>').shift()} alt=""/>
                                <p><a className="btn btn-secondary" href={result.query.results.channel.item.link.split('/*').pop()} role="button" target="_blank">View details &raquo;</a></p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default WeatherTabs;
