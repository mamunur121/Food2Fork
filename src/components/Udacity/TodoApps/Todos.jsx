import React from 'react';
import TodoList from "./TodoList";

class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    // setup the add handler
    addTask(event) {
        event.preventDefault();
        var taskArray = this.state.tasks;
        // grab input text value
        var newTaskInput = this.refs.newTask.value;
        // add new text value to task array
        taskArray.push(newTaskInput);

        this.setState({ tasks: taskArray });
        //clear form box after submit
        this.refs.newTask.value = "";
    }

    // setup the remove handler
    removeTask(name, i) {
        var tasks = this.state.tasks.slice();
        // remove task at index
        tasks.splice(i, 1);
        //update task array
        this.setState({
            tasks
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addTask}>
                    <input type="text" placeholder="Enter New Task" ref="newTask" />
                    <button type="submit">add</button>
                </form>
                <TodoList entries={this.state.tasks} removeTodo={this.removeTask} />
            </div>
        );
    }
}


export default Todos;