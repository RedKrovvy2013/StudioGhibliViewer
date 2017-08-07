import React from 'React'
import axios from 'axios'

import TaskRunner from './../../util/TaskRunner'

function createRequestTask(url, property, component) {
    return function(done) {
        axios.get(url).then(function(response) {
            if(response.data.constructor === Array) {
                // case where data is a collection, like for /people
                component.setData(response.data)
            } else {
                component.addDataItem(response.data)
            }
            done()
        }).catch(function() { done() })
        //ignoring failure; in context it is just a data item not gotten
    }
}

//NOTE: only works when creating a new class per instance, else
//      runningData and taskRunner will be shared across instances
var ListLoader = React.createClass({

    getInitialState: function() {
        return { data: [] }
    },

    runningData: [],

    addDataItem: function(item) {
        this.runningData.push({
            value: item[this.props.property],
            id: item.id
        })
        this.maybeSetState()
    },

    setData: function(data) {
        this.runningData = data.map( item => {
             return {
                 value: item[this.props.property],
                 id: item.id
             }
         })
        this.maybeSetState()
    },

    maybeSetState: function() {
        if(this.taskRunner.tasks.length === 0) {
            this.setState({ data: this.runningData })
        }
    },

    taskRunner: null,
    componentDidMount: function() {
        const { props: { urls, property } } = this
        this.taskRunner = new TaskRunner()
        urls.forEach((url) => {
            this.taskRunner.push(
                createRequestTask(url, property, this)
            )
        })
        // use arrow fx to bind this
    },

    render: function() {
        const { state: { data }, props: { ListClass } } = this
        return (
            <ListClass items={data} {...this.props} />
        )
    }

})

export default ListLoader
