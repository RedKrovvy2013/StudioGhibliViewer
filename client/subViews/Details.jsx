var React = require('react')

var Details = function(props) {
    return (
        <section className="details">
            {function() {
                var elems = []
                for(var i=0; i < props.items.length; ++i) {
                    var item = props.items[i]
                    var key = Object.keys(item)[0]
                    var value = item[key]
                    elems.push(
                        <p key={i}>{key}: <a href="#">{value}</a></p>
                    )
                }
                return elems
            }()}
        </section>
    )
}

module.exports = Details
