import React from  'react';


class Try1 extends React.Component {

    render() {
       const {info} = this.props;
        return(
            <div className="col-md-6 col-lg-3">
                <div className="card mb-3">
                    <div className="card-body">
                        <p className="card-title"><span>Name: </span>{info.name}</p>
                        <p className="card-text">
                            <span>Age: </span>{info.age}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Try1;
