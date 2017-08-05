var React = require('React')
var axios = require('axios')

var TaskRunner = require('./../../util/TaskRunner')

function createRequestTask(url, property, component) {
    return function(done) {
        axios.get(url).then(function(response) {
            component.addData(response.data[property])
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
                    <View items={data} />
                )
            }

        })
    }
}

module.exports = getDataAndPresent
