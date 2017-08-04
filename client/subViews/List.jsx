var React = require('react')

var List = function(props) {
    return (
        <div className="row">
            <div className="col-md-1">
            </div>
            <div className="col-md-1 list-label-container">
                <h4>{props.title}</h4>
            </div>
            <div className="col-md-8 list-container">
                {function() {
                    var elems = []
                    for(var i=0; i < props.items.length; ++i) {
                        elems.push(<div key={i}><span>{props.items[i]}</span></div>)
                    }
                    return elems
                }()}
            </div>
        </div>
    )
}

module.exports = List
