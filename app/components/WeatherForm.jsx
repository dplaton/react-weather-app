var React = require('react');

var WeatherForm = React.createClass({

    onFormSubmit: function(e) {
        e.preventDefault();
        
        var loc = this.refs.city.value;

        if (loc.trim().length > 0) {
            this.refs.city.value = '';
            this.props.onSearch(loc);
        }
    },

    render: function() {
        return (
            <form id='weatherForm' onSubmit={this.onFormSubmit}>
                <input type="text" ref="city" placeholder="Enter city name"/>
                <button>Get Weather</button>
            </form>
        )
    }
});

module.exports = WeatherForm;
