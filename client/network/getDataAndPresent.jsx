var React = require('React')
var axios = require('axios')

var TaskRunner = require('./../../util/TaskRunner')

function createRequestTask(url, property, component) {
    return function(done) {
        axios.get(url).then(function(response) {
            if(response.data.constructor === Array) {
                // case where data is a collection, like for /people
                component.setData(response.data)
            } else {
                component.addData(response.data[property])
            }
            done()
        }).catch(function() { done() })
        //ignoring failure; in context it is just a data item not gotten
    }
}

function getDataAndPresent(urls, property) {
    return function(View) {
        return React.createClass({

            getInitialState: function() {
                return { data: [] }
            },

            runningData: [],

            addData: function(item) {
                this.runningData.push(item)
                this.maybeSetState()
            },

            setData: function(data) {
                this.runningData = data.map( item => item[property] )
                this.maybeSetState()
            },

            maybeSetState: function() {
                if(this.taskRunner.tasks.length === 0) {
                    this.setState({ data: this.runningData })
                }
            },

            taskRunner: null,
            componentDidMount: function() {
                this.taskRunner = new TaskRunner()
                urls.forEach((url) => {
                    this.taskRunner.push(createRequestTask(url, property, this))
                })
                // use arrow fx to bind this
            },

            render: function() {
                const { state: { data } } = this
                return (
                    <View items={data} {...this.props} />
                )
            }

        })
    }
}

module.exports = getDataAndPresent
