import React from 'react'
import axios from 'axios'

import {ghibliDomain} from './../constants'

var ViewsLoader = React.createClass({

    getInitialState: function() {
        return { data: [] }
    },

    componentDidUpdate: function(prevProps, prevState) {
        if(typeof this.props.match.params.id !== "undefined") {
            const id = this.props.match.params.id
            const element = document.getElementById(id)
            if (element) {
                element.scrollIntoView()
            }
        }
    },

    componentDidMount: function() {
        axios.get(`${ghibliDomain}/${this.props.uri}`)
            .then((response) => {
                // use arrow fx to bind this to react class
                this.setState({data: response.data})
            })
            //TODO: add error handling
    },

    render: function() {
        const { state: {data}, props: {ViewClass} } = this
        return (
            <main>
                {data.map(function(item, index) {
                    return <ViewClass {...item} key={index} />
                })}
            </main>
        )
    }

})

export default ViewsLoader
