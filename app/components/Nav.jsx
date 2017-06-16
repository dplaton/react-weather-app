var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

    onSearch: function (event) {
        event.preventDefault();
        alert('Does not work yet');
    },

    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Weather app</li>
                        <li>
                            <IndexLink
                                to="/"
                                activeClassName="active"
                                activeStyle={{
                                fontWeight: 'bold'
                            }}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                activeClassName="active"
                                activeStyle={{
                                fontWeight: 'bold'
                            }}>About</Link>
                        </li>
                        <li>
                            <Link
                                to="/examples"
                                activeClassName="active"
                                activeStyle={{
                                fontWeight: 'bold'
                            }}>Examples</Link>
                        </li>
                    </ul>

                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search"/></li>
                            <li>
                                <button type="submit" className="button">Get Weather</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
})

module.exports = Nav