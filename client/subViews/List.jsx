var React = require('react')

var List = function(props) {
    return (
        <details className="label-and-list">
            <summary>
                <h4 className="list-label">{props.title}</h4>
            </summary>
            <p className="list">
                {function() {
                    var elems = []
                    for(var i=0; i < props.items.length; ++i) {
                        var isLast = i === props.items.length - 1
                        elems.push(
                            <span key={i}>
                                <a href="#">{props.items[i]} </a>
                                {!isLast && <span className="divider">|</span>}
                            </span>
                        )
                    }
                    return elems
                }()}
            </p>
        </details>
    )
}

module.exports = List
