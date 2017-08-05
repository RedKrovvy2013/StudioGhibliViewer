
function TaskRunner() {
    this.tasks = []
    this.isProcessing = false
}

TaskRunner.prototype.process = function() {
    if( this.isProcessing === false && this.tasks.length > 0 ) {
        var fx = this.tasks.shift()
        this.isProcessing = true

        fx( function() {
            this.isProcessing = false
            this.process()
        }.bind(this) )
    }
}

TaskRunner.prototype.push = function(task) {
    this.tasks.push(task)
    this.process()
}

module.exports = TaskRunner
