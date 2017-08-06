var React = require('react')

var List = function(props) {
    return (
        <section className="label-and-list">
            <h4 className="list-label">
                {props.title}
            </h4>
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
        </section>
    )
}

module.exports = List
