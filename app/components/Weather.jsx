var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

    getInitialState: function() {
       return {
           isLoading: false
       }
    },

    componentDidMount: function() {
        /* this.prop.location is the URL, document.location */
        var location = this.props.location.query.location;
        if (location && location.length > 0) {
            this.handleSearch(location);
            // remove the query string after searching
            window.location.hash = '#/';
        }
    },

    componentWillReceiveProps: function(newProps) {
        var location = newProps.location.query.location;
         if (location && location.length > 0) {
            this.handleSearch(location);
            // remove the query string after searching
            window.location.hash = '#/';
        }
    },

    handleSearch: function(location) {
        this.setState({
            isLoading: true,
            isError: false,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        })
        var self = this;
        openWeatherMap.getTemp(location).then((temp) => {
            self.setState({
                location:location,
                temp: temp,
                isLoading: false,
                isError:false
            })
        }, (error) => {
            self.setState({
                isLoading: false,
                isError:true,
                location: location,
                temp: undefined,
                message: error.message
            });
        });
    },

    render: function() {
        var {temp, location, isLoading, isError, message} = this.state;

        var renderMessage = () => {
            if (isLoading) {
                return <h3>Fetching weather... </h3>
            } else if (temp && location) {
                return  <WeatherMessage temp={temp} location={location}/>
            } else if (isError) {
                return 
            }
        } 

        function renderError() {
            if (isError) {
                return (
                <ErrorModal message = {message}/>
                )
            }
        }

        return (
            <div>
                <h1 className="text-center pageTitle">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
});

module.exports = Weather;