var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({

    getInitialState: function() {
       return {
           isLoading: false
       }
    },

    handleSearch: function(location) {
        this.setState({
            isLoading: true,
            isError: false
        })
        var self = this;
        openWeatherMap.getTemp(location).then((temp) => {
            self.setState({
                location:location,
                temp: temp,
                isLoading: false,
                isError:false
            })
        }, (errorMessage) => {
            self.setState({
                isLoading: false,
                isError:true,
                location: location,
                temp: undefined
            });
        });
    },

    render: function() {
        var {temp, location, isLoading, isError} = this.state;

        var renderMessage = () => {
            if (isLoading) {
                return <h3>Fetching weather... </h3>
            } else if (temp && location) {
                return  <WeatherMessage temp={temp} location={location}/>
            } else if (isError) {
                return <h3> City not found: {location} </h3>
            }
        } 

        return (
            <div>
            <h3>Weather component</h3>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;