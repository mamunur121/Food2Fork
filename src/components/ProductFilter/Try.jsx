import React from 'react';

import '../../App.css';
import Try1 from "./Try1";


class Try extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: 'John',
                    age: 20
                },
            ]
        }
    }


    onSubmit = event => {
        event.preventDefault();
        const name = this.name.value;
        const age = this.age.value;
        const info = {name, age};
        const data = [...this.state.data, info];
        console.log(data);
        this.setState({
            data
        });
    };

    render() {
        return (
            <div className="container">
                <h1>React State</h1>

                <hr/>

                <div className="row">
                    <form className="form-inline" onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            className="form-control mb-2 mr-sm-2 mb-sm-0"
                            placeholder="Name"
                            ref={input => this.name = input}
                        />
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Age"
                                ref={input => this.age = input}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>

                <hr/>

                <div className="row">
                    {
                        this.state.data.map((info, index) => <Try1 key={index} info={info}/>)
                    }
                </div>

            </div>
        );
    }

}


export default Try;