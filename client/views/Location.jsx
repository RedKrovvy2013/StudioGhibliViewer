import React from 'react'

import TitleAndSideData from './../subViews/TitleAndSideData'
import Description from './../subViews/Description'
import List from './../subViews/List'
import getDataAndPresentList from './../network/getDataAndPresentList'

var Location = function(props) {
    return (
        <article>
            <TitleAndSideData title={props.name} id={props.id}>
                <span>
                    <img src="/images/water.png"
                    className="icon water" alt="surface water" />
                    {props.surface_water}
                </span>
            </TitleAndSideData>
            <section className="ghibli-details">
                <p>Climate: {props.climate}</p>
                <p>Terrain: {props.terrain}</p>
            </section>
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
