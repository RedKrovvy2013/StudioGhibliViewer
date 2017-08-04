var React = require('React')
var axios = require('axios')

const {ghibliDomain} = require('./../constants')
var Film = require('./../views/Film')

var FilmsContainer = React.createClass({

    getInitialState: function() {
        return { films: [] }
    },

    componentDidMount: function() {
        axios.get(`${ghibliDomain}/films`)
            .then((response) => {
                // use arrow fx to bind this to react class
                this.setState({films: response.data})
            })
            //TODO: add error handling
    },

    render: function() {
        const { state: {films} } = this
        return (
            <div className="container">
                {films.map(function(film, index) {
                    var details = [{director: film.director},
                                       {producer: film.producer}]
                    return <Film description={film.description}
                                 details={details}
                                 people={film.people}
                                 key={index} />
                })}
            </div>
        )
    }

})

module.exports = FilmsContainer
