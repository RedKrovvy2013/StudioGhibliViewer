var React = require('react')

var Description = require('./../subViews/Description')
var Details = require('./../subViews/Details')
var List = require('./../subViews/List')
var getDataAndPresent = require('./../network/getDataAndPresent')

var Film = function(props) {

    return (
        <div>
            <Description value={props.description} />
            <Details items={props.details} />
            {function() {
                var FetchedList = getDataAndPresent(props.people, "name")(List)
                return <FetchedList title="People" />
            }()}
        </div>
    )
}

module.exports = Film
