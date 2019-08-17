import React from 'react';
import Todos from "./Todos";

class ToDo extends React.Component {

    render() {
        return (
            <div className="app container">
                <div className="title">
                    <h1>React Todo App</h1>
                    <Todos />
                </div>
            </div>
        );
    }
}


export default ToDo;