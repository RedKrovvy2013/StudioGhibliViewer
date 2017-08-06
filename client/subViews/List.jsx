var React = require('react')
var {Link} = require('react-router')

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
                                <Link to={"/people#"+props.items[i].id}>
                                    {props.items[i].value}
                                </Link>
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
