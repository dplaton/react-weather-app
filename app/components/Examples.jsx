var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({     render: function() {         return (
//            <h3>Examples component</h3>         )     } });

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center pageTitle">Examples</h1>
            <p>Here are a few examples:</p>
            <ol>
                <li>
                    <Link to='/?location=Bucharest'>Bucharest</Link>
                </li>
                <li>
                    <Link to='/?location=Rome'>Rome</Link>
                </li>
            </ol>
        </div>
    )
}

module.exports = Examples;