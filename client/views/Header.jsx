var React = require('react')

var Header = function(props) {
    return (
      <div>
        <div className="container header">
            <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-2">
                    <h3>Films</h3>
                </div>
                <div className="col-md-2">
                    <h3>People</h3>
                </div>
                <div className="col-md-2">
                    <h3>Species</h3>
                </div>
                <div className="col-md-2">
                    <h3>Locations</h3>
                </div>
                <div className="col-md-2">
                    <h3>Vehicles</h3>
                </div>
                <div className="col-md-1">
                </div>
            </div>
        </div>
        <hr />
      </div>
    )
}

module.exports = Header
