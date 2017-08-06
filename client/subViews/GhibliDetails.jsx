var React = require('react')

var GhibliDetails = function(props) {
    return (
        <section className="ghibli-details">
            {function() {
                var elems = []
                for(var i=0; i < props.items.length; ++i) {
                    var item = props.items[i]
                    elems.push(
                        <p key={i}>{item.key}: {item.value}</p>
                    )
                }
                return elems
            }()}
        </section>
    )
}

module.exports = GhibliDetails
