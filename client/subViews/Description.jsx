var React = require('react')

var Description = function(props) {
    return (
        <p className="description">
            {props.value}
        </p>
    )
}

module.exports = Description
