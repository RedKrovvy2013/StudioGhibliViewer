/*
  processes all tasks for a single task runner, then moves on to
  next task runner that has tasks and is in task runner queue
*/

function TaskRunners() { }

TaskRunners.prototype.taskRunners = []
TaskRunners.prototype.baseIsProcessing = false
TaskRunners.prototype.baseProcess = function() {
    if(!this.baseIsProcessing) {
        this.baseIsProcessing = true
        var taskRunner = this.taskRunners.shift()
        taskRunner.isWaiting = false
        taskRunner.isProcessing = true
        taskRunner.process()
    }
}
TaskRunners.prototype.baseAdd = function(taskRunner) {
    //only called when a task runner is not in line of task runners
    //waiting their turn to do their tasks
    this.taskRunners.push(taskRunner)
    this.baseProcess()
}
TaskRunners.prototype.baseDone = function() {
    this.baseIsProcessing = false
    if(this.taskRunners.length > 0) {
        this.baseProcess()
    }
}

function TaskRunner() {
    this.tasks = []
    this.isProcessing = false
    this.isWaiting = false
}

TaskRunner.prototype = new TaskRunners()

TaskRunner.prototype.process = function() {
    if( this.tasks.length > 0 ) {
        var task = this.tasks.shift()
        task( function() {
            this.process()
        }.bind(this) )
    } else {
        this.isProcessing = false
        this.baseDone()
    }
}

TaskRunner.prototype.push = function(task) {
    this.tasks.push(task)
    if(!this.isWaiting && !this.isProcessing) {
        this.isWaiting = true
        this.baseAdd(this)
    }
}

module.exports = TaskRunner
