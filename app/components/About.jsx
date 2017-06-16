var React = require('react');

/* 
var About = React.createClass({
    render: function() {
        return (
            <h3>About component</h3>
        )
    }
});
*/

/* Stateless presentational components can be written like this */
/* You can only do this with STATELESS components */

var About = (props) => <h3>About component</h3>

module.exports = About;