var React = require('react')

var TitleAndSideData = require('./../subViews/TitleAndSideData')
var Description = require('./../subViews/Description')
var GhibliDetails = require('./../subViews/GhibliDetails')
var List = require('./../subViews/List')
var getDataAndPresentList = require('./../network/getDataAndPresentList')
var getDataAndPresentSpan = require('./../network/getDataAndPresentSpan')

var Person = function(props) {

    return (
        <article>
            <TitleAndSideData title={props.name} id={props.id}
                              farSideData={props.farSideData}>
                {function() {
                    var FetchedSpan = getDataAndPresentSpan(props.species, "name")
                    return <span> (<FetchedSpan /> {props.gender})</span>
                }()}
            </TitleAndSideData>
            <GhibliDetails items={props.details} />
                {function() {
                    var FetchedList = getDataAndPresentList(props.films, "title")(List)
                    return <FetchedList title="Films" />
                }()}
        </article>
    )
}

module.exports = Person
