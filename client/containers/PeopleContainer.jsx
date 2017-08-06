var React = require('React')
var axios = require('axios')

const {ghibliDomain} = require('./../constants')
var Person = require('./../views/Person')

var PeopleContainer = React.createClass({

    getInitialState: function() {
        return { people: [] }
    },

    componentDidMount: function() {
        axios.get(`${ghibliDomain}/people`)
            .then((response) => {
                // use arrow fx to bind this to react class
                this.setState({people: response.data})
            })
            //TODO: add error handling
    },

    render: function() {
        const { state: {people} } = this
        return (
            <main>
                {people.map(function(person, index) {
                    var details = [{ key: "Hair Color", value: person.hair_color},
                                   { key: "Eye Color", value: person.eye_color}]
                    return <Person name={person.name} id={person.id}
                                 species={person.species}
                                 gender={person.gender}
                                 farSideData={person.age}
                                 details={details}
                                 films={person.films}
                                 key={index} />
                })}
            </main>
        )
    }

})

module.exports = PeopleContainer
