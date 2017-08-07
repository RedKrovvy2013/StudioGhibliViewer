import React from 'react'

import TitleAndSideData from './../subViews/TitleAndSideData'
import Description from './../subViews/Description'
import GhibliDetails from './../subViews/GhibliDetails'
import List from './../subViews/List'
import getDataAndPresentList from './../network/getDataAndPresentList'
import getDataAndPresentSpan from './../network/getDataAndPresentSpan'

var Person = function(props) {

    var details = [{ key: "Hair Color", value: props.hair_color},
                   { key: "Eye Color", value: props.eye_color}]
    return (
        <article>
            <TitleAndSideData title={props.name} id={props.id}>
                {function() {
                  var FetchedSpan = getDataAndPresentSpan(props.species, "name")
                  return <span> (<FetchedSpan /> {props.gender})</span>
                }()}
            </TitleAndSideData>
            <GhibliDetails items={details} />
            {function() {
                var FetchedList = getDataAndPresentList(props.films, "title")(List)
                return <FetchedList title="Films" uri="films" />
            }()}
        </article>
    )

}

export default Person
