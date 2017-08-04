var React = require('react')

var Description = function(props) {
    return (
        <div className="row">
            <div className="col-md-1">
            </div>
            <div className="col-md-7">
                <p className="description">
                    {props.value}
                </p>
            </div>
        </div>
    )
}

module.exports = Description
