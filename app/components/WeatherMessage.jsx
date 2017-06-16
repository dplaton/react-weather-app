var React = require('react');

var WeatherMessage = ({temp,location}) => {
    //var {temp, location} = props;
    return (
        <p>Today is {temp} degrees in {location}</p>
    )
}

module.exports = WeatherMessage;
