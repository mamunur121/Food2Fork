import React from 'react';

class TodoList extends React.Component {

    removeItem(item, i) {
        this.props.removeTodo(item, i);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.entries.map((todo, i) => {
                        return (
                            <li key={`${todo} ${i}`}>
                                {todo}
                                {" "}

                                <button
                                    onClick={() => {
                                        this.removeItem(todo, i);
                                    }}
                                    key={i}
                                >
                                    {" "}Delete
                                    {" "}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}


export default TodoList;