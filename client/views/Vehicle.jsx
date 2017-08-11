import React from 'react'

import TitleAndSideData from './../subViews/TitleAndSideData'
import Description from './../subViews/Description'
import List from './../subViews/List'
import getDataAndPresentList from './../network/getDataAndPresentList'
import DataItemLoader from './../network/DataItemLoader'
import GhibliLink from './../subViews/GhibliLink'

var Vehicle = function(props) {

    return (
        <article>
            <TitleAndSideData title={props.name} id={props.id}
                              farSideData={props.vehicle_class}>
                <span>
                    <img src="/images/ruler.png"
                         className="icon ruler" alt="vehicle length" />
                     {props.length}
                </span>
            </TitleAndSideData>
            <Description value={props.description} />
            <section className="ghibli-details">
                <p>Pilot: <DataItemLoader ViewClass={GhibliLink} url={props.pilot}
                                property="name" uri="people" /></p>
            </section>
            {function() {
                var FetchedList = getDataAndPresentList([props.films], "title")(List)
                // props.films is just a str, so wrap in array
                return <FetchedList title="Films" uri="films" />
            }()}
        </article>
    )
}

export default Vehicle
