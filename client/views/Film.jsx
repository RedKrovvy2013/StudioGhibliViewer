var React = require('react')

var TitleAndSideData = require('./../subViews/TitleAndSideData')
var Description = require('./../subViews/Description')
var GhibliDetails = require('./../subViews/GhibliDetails')
var List = require('./../subViews/List')
var getDataAndPresent = require('./../network/getDataAndPresent')

var Film = function(props) {

    return (
        <article>
            <TitleAndSideData title={props.title} farSideData={props.farSideData}>
<span><img src="images/tomato.png" className="icon tomato"/> {props.rtScore}%</span>
            </TitleAndSideData>
            <Description value={props.description} />
            <GhibliDetails items={props.details} />
            <section className="story-details">
                {function() {
                    var FetchedList = getDataAndPresent(props.people, "name")(List)
                    return <FetchedList title="People" />
                }()}
                {function() {
                    var FetchedList = getDataAndPresent(props.species, "name")(List)
                    return <FetchedList title="Species" />
                }()}
                {function() {
                    var FetchedList = getDataAndPresent(props.locations, "name")(List)
                    return <FetchedList title="Locations" />
                }()}
                {function() {
                    var FetchedList = getDataAndPresent(props.vehicles, "name")(List)
                    return <FetchedList title="Vehicles" />
                }()}
            </section>
        </article>
    )
}

module.exports = Film
