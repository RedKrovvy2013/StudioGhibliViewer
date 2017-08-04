var React = require('react')

var Details = function(props) {
    return (
        <div className="row">
            <div className="col-md-1">
            </div>
            <div className="col-md-10 details-container">
                {function() {
                    var elems = []
                    for(var i=0; i < props.items.length; ++i) {
                        var item = props.items[i]
                        var key = Object.keys(item)[0]
                        var value = item[key]
                        elems.push(
                            <div key={i}>{key}: <a href="#">{value}</a></div>
                        )
                    }
                    return elems
                }()}
            </div>
            <div className="col-md-1">
            </div>
        </div>
    )
}

module.exports = Details
