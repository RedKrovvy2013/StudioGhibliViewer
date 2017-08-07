import React from 'react'

var TitleAndSideData = function(props) {
    return (
        <section className="title-and-side-data" id={props.id}>
            <h1>{props.title}</h1>
            {props.children}
            <h3>{props.farSideData}</h3>
        </section>
    )
}

export default TitleAndSideData
