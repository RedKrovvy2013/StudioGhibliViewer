var React = require('react')

var Description = require('./../subViews/Description')
var Details = require('./../subViews/Details')
var List = require('./../subViews/List')

// var description = "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world."
// var details = [{director: "Hayao Miyazaki"}, {producer: "Isao Takahata"}]
// var people = ["George Carlin", "Luke Skywalker", "Mary Poppins"]

var Film = function(props) {
    return (
        <div>
            <Description value={props.description} />
            <Details items={props.details} />
            <List title="People" items={props.people} />
        </div>
    )
}

module.exports = Film
