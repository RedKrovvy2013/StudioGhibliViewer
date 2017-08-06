var React = require('react')
var {Link} = require('react-router')

var Header = function(props) {
    return (
      <div>
          <header>
                  <h3><Link to="/films" activeClassName="active">Films</Link></h3>
                  <h3><Link to="/people" activeClassName="active">People</Link></h3>
                  <h3><Link to="/species" activeClassName="active">Species</Link></h3>
                  <h3><Link to="/locations" activeClassName="active">Locations</Link></h3>
                  <h3><Link to="/vehicles" activeClassName="active">Vehicles</Link></h3>
          </header>
          <hr />
          {props.children}
      </div>
    )
}

module.exports = Header
