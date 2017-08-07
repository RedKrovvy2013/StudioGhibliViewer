import React from 'react'
import axios from 'axios'
import createReactClass from 'create-react-class'

var DataItemLoader = createReactClass({

    getInitialState: function() {
        return { dataItem: "", dataItemId: "" }
    },

    componentDidMount: function() {

        axios.get(this.props.url).then((response) => {
            this.setState({dataItem: response.data[this.props.property],
                           dataItemId: response.data.id})
        })

    },

    render: function() {
        const { state: { dataItem, dataItemId },
                props: {ViewClass, uri} } = this
        return (
            <ViewClass dataItem={dataItem} dataItemId={dataItemId} uri={uri} />
        )
    }

})

export default DataItemLoader
