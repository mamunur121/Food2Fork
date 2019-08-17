import React from 'react';

class Product extends React.Component {
    constructor () {
        super();
    }

    render () {
        return (
            <li>
                <div className="feature">
                    <div className="feature-hd">
                        <h2 className="hdg hdg_2">{this.props.product.name}</h2>
                    </div>
                    <div className="feature-bd">
                        <p>{this.props.product.series}</p>
                    </div>
                    <div className="feature-ft">
                        <p>{this.props.product.abv}% ABV</p>
                    </div>
                </div>
            </li>
        )
    }
}


export default Product;