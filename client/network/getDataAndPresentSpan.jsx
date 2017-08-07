import React from 'React'
import axios from 'axios'

function getDataAndPresentSpan(url, property) {
    return React.createClass({

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
