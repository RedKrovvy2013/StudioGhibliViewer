var React = require('react')

var TitleAndSideData = require('./../subViews/TitleAndSideData')
var Description = require('./../subViews/Description')
var GhibliDetails = require('./../subViews/GhibliDetails')
var List = require('./../subViews/List')
var getDataAndPresent = require('./../network/getDataAndPresent')

var Person = function(props) {

    return (
        <article>
            <TitleAndSideData title={props.name} id={props.id}
                              farSideData={props.farSideData}>
                <span> (Human {props.gender})</span>
            </TitleAndSideData>
            <GhibliDetails items={props.details} />
                {function() {
                    var FetchedList = getDataAndPresent(props.films, "title")(List)
                    return <FetchedList title="Films" />
                }()}
        </article>
    )
}

module.exports = Person
