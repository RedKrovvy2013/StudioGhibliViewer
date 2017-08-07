import React from 'React'
import axios from 'axios'
import createReactClass from 'create-react-class'

function getDataAndPresentSpan(url, property) {
    return createReactClass({

        getInitialState: function() {
            return { data: "" }
        },

        componentDidMount: function() {

            axios.get(url).then((response) => {
                this.setState({data: response.data[property]})
            })
            //ignoring failure
        },

        render: function() {
            const { state: { data } } = this
            return (
                <span>{data}</span>
            )
        }

    })
}

export default getDataAndPresentSpan
