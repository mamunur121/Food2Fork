import React from 'react';

class ProductRow extends React.Component {
    render() {
        const {product} = this.props;
        const name = product.stocked ?
            product.name :
            <span style={{color: 'red'}}>
                {product.name}
            </span>;
        return (
            <React.Fragment>
                <tr>
                    <td>{name}</td>
                    <td>{product.price}</td>
                </tr>
            </React.Fragment>
        );
    }
}
export default ProductRow;