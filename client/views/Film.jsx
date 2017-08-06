var React = require('react')

var TitleAndSideData = require('./../subViews/TitleAndSideData')
var Description = require('./../subViews/Description')
var GhibliDetails = require('./../subViews/GhibliDetails')
var List = require('./../subViews/List')
var getDataAndPresentList = require('./../network/getDataAndPresentList')

var Film = function(props) {

    return (
        <article>
            <TitleAndSideData title={props.title} farSideData={props.farSideData}>
<span><img src="images/tomato.png" className="icon tomato"/> {props.rtScore}%</span>
            </TitleAndSideData>
            <Description value={props.description} />
            <GhibliDetails items={props.details} />
                {function() {
                    var FetchedList = getDataAndPresentList(props.people, "name")(List)
                    return <FetchedList title="People" />
                }()}
                {function() {
                    var FetchedList = getDataAndPresentList(props.species, "name")(List)
                    return <FetchedList title="Species" />
                }()}
                {function() {
                    var FetchedList = getDataAndPresentList(props.locations, "name")(List)
                    return <FetchedList title="Locations" />
                }()}
                {function() {
                    var FetchedList = getDataAndPresentList(props.vehicles, "name")(List)
                    return <FetchedList title="Vehicles" />
                }()}
        </article>
    )
}

module.exports = Film
