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
            <main>
                {films.map(function(film, index) {
                    var details = [{key: "Director", value: film.director},
                                   {key: "Producer", value: film.producer}]
                    return <Film title={film.title}
                                 rtScore={film.rt_score}
                                 farSideData={film.release_date}
                                 description={film.description}
                                 details={details}
                                 people={film.people}
                                 species={film.species}
                                 locations={film.locations}
                                 vehicles={film.vehicles}
                                 key={index} />
                })}
            </main>
        )
    }

})

module.exports = FilmsContainer
