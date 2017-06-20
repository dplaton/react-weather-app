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

var About = (props) => {
    return(
        <div>
            <h1 className="text-center pageTitle">About</h1>
            <p>Weather can be a pain in the ass. It can be your friend, or it can be your enemy. It can add sprinkles and joy to your otherwise sad day, or it can ruin your date. </p>
            <p>Stay safe. Stay dry. Stay positive. Use our weather app</p>
        </div>
    )
}

module.exports = About;