var React = require('react');

var WeatherMessage = ({temp,location}) => {
    //var {temp, location} = props;
    return (
        <div className="callout success small">
            <p>Today is {temp} degrees in {location}</p>
        </div>
    )
}

module.exports = WeatherMessage;
