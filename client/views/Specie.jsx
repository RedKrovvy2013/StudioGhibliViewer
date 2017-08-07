import React from 'react'

import TitleAndSideData from './../subViews/TitleAndSideData'
import List from './../subViews/List'
import getDataAndPresentList from './../network/getDataAndPresentList'

var Specie = function(props) {
    return (
        <article>
            <TitleAndSideData title={props.name} id={props.id}
                              farSideData={props.classification} />
            <section className="ghibli-details">
                <p>Eye Colors: {props.eye_colors}</p>
                <p>Hair Colors: {props.hair_colors}</p>
            </section>
            {function() {
                var FetchedList = getDataAndPresentList(props.people, "name")(List)
                return <FetchedList title="People" uri="people" />
            }()}
            {function() {
                var FetchedList = getDataAndPresentList(props.films, "title")(List)
                return <FetchedList title="Films" uri="films" />
            }()}
        </article>
    )
}

export default Specie
