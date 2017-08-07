import React from 'react'

import TitleAndSideData from './../subViews/TitleAndSideData'
import GhibliDetails from './../subViews/GhibliDetails'
import List from './../subViews/List'
import getDataAndPresentList from './../network/getDataAndPresentList'

var Specie = function(props) {

    var details = [{key: "Eye Colors", value: props.eye_colors},
                   {key: "Hair Colors", value: props.hair_colors}]

    return (
        <article>
            <TitleAndSideData title={props.name} id={props.id}
                              farSideData={props.classification} />
            <GhibliDetails items={details} />
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
