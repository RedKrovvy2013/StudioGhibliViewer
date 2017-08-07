import React from 'react'
import {Link} from 'react-router-dom'

import TitleAndSideData from './../subViews/TitleAndSideData'
import Description from './../subViews/Description'
import List from './../subViews/List'
import getDataAndPresentList from './../network/getDataAndPresentList'
import DataItemLoader from './../network/DataItemLoader'
import GhibliLink from './../subViews/GhibliLink'

var Person = function(props) {
    return (
        <article>
            <TitleAndSideData title={props.name} id={props.id}>
              <span>
                (<DataItemLoader ViewClass={GhibliLink} url={props.species}
                                property="name" uri="species" /> {props.gender})</span>
                 {/* url is for fetching, uri is for building link */}
            </TitleAndSideData>
            <section className="ghibli-details">
                <p>Hair Color: {props.hair_color}</p>
                <p>Eye Color: {props.eye_color}</p>
            </section>
            {function() {
                var FetchedList = getDataAndPresentList(props.films, "title")(List)
                return <FetchedList title="Films" uri="films" />
            }()}
        </article>
    )

}

export default Person
