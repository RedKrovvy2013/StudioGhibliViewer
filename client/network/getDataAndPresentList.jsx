import React from 'React'
import axios from 'axios'
import createReactClass from 'create-react-class'
import validUrl from 'valid-url'

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

function getDataAndPresentList(urls, property) {
    return function(List) {
        return createReactClass({

            getInitialState: function() {
                return { data: [] }
            },

            runningData: [],

            addDataItem: function(item) {
                this.runningData.push({
                    value: item[property],
                    id: item.id
                })
                this.maybeSetState()
            },

            setData: function(data) {
                this.runningData = data.map( item => {
                     return {
                         value: item[property],
                         id: item.id
                     }
                 })
                this.maybeSetState()
            },

            maybeSetState: function() {
                if(this.taskRunner.tasks.length === 0 && !this.isUnmounted) {
                    this.setState({ data: this.runningData })
                }
            },

            componentWillUnmount: function() {
                this.isUnmounted = true
            },

            taskRunner: null,
            isUnmounted: false,
            componentDidMount: function() {
                this.taskRunner = new TaskRunner()
                urls.forEach((url) => {
                    if(validUrl.isWebUri(url)) {
                      this.taskRunner.push(createRequestTask(url, property, this))
                    }
                })
                // use arrow fx to bind this
            },

            render: function() {
                const { state: { data } } = this
                return (
                    <List items={data} {...this.props} />
                )
            }

        })
    }
}

export default getDataAndPresentList
