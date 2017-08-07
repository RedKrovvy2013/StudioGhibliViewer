import React from 'react'
import axios from 'axios'
import createReactClass from 'create-react-class'

import {ghibliDomain} from './../constants'

function getDataAndPresentViews(uri) {
    return function(View) {
        return createReactClass({

            getInitialState: function() {
                return { data: [] }
            },

            componentDidMount: function() {
                axios.get(`${ghibliDomain}/${uri}`)
                    .then((response) => {
                        // use arrow fx to bind this to react class
                        this.setState({data: response.data})
                    })
                    //TODO: add error handling
            },

            render: function() {
                const { state: {data} } = this
                return (
                    <main>
                        {data.map(function(item, index) {
                            return <View {...item} key={index} />
                        })}
                    </main>
                )
            }

        })
    }
}

export default getDataAndPresentViews
