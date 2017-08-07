import React from 'react'

import TitleAndSideData from './../subViews/TitleAndSideData'
import Description from './../subViews/Description'
import GhibliDetails from './../subViews/GhibliDetails'
import List from './../subViews/List'
import getDataAndPresentList from './../network/getDataAndPresentList'

var Vehicle = function(props) {

    // var details = [{key: "Pilot", value: props.}]

    return (
        <article>
            <TitleAndSideData title={props.name} id={props.id}
                              farSideData={props.vehicle_class}>
                <span>
                    <img src="http://localhost:8080/images/ruler.png"
                         className="icon ruler" alt="vehicle length" />
                     {props.length}
                </span>
            </TitleAndSideData>
            <Description value={props.description} />
            {/* <GhibliDetails items={details} /> */}
            {function() {
                var FetchedList = getDataAndPresentList([props.films], "title")(List)
                // props.films is just a str, so wrap in array
                return <FetchedList title="Films" uri="films" />
            }()}
        </article>
    )
}

export default Vehicle
