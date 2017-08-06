var React = require('react')

var TitleAndSideData = function(props) {
    return (
        <section className="title-and-side-data">
            <h1>{props.title}</h1>
            {props.children}
            <h3>{props.farSideData}</h3>
        </section>
    )
}

module.exports = TitleAndSideData
