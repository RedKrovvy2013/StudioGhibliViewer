import React from 'react'

import TitleAndSideData from './../subViews/TitleAndSideData'
import Description from './../subViews/Description'
import GhibliDetails from './../subViews/GhibliDetails'
import List from './../subViews/List'
import getDataAndPresentList from './../network/getDataAndPresentList'

var Location = function(props) {

    var details = [{ key: "Climate", value: props.climate},
                   { key: "Terrain", value: props.terrain}]
    return (
        <article>
            <TitleAndSideData title={props.name} id={props.id}>
                <span>
                    <img src="http://localhost:8080/images/water.png"
                    className="icon water" alt="surface water" />
                    {props.surface_water}
                </span>
            </TitleAndSideData>
            <GhibliDetails items={details} />
            {function() {
                var FetchedList = getDataAndPresentList(props.residents, "name")(List)
                return <FetchedList title="Residents" uri="people" />
            }()}
            {function() {
                var FetchedList = getDataAndPresentList(props.films, "title")(List)
                return <FetchedList title="Films" uri="films" />
            }()}
        </article>
    )

}

export default Location
