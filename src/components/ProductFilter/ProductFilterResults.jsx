import React from 'react';
import Product from './Product';

class ProductFilterResults extends React.Component {
    constructor() {
        super();
    }

    render() {
        var results = [];

        if (this.props.abv === true) {
            this.props.products.sort((a,b) => {
                return b.abv - a.abv;
            })
        }

        this.props.products.map((product) => {
            if (this.props.series === 0 || this.props.series === 'All') {
                results.push(<Product product={product} />);
            }
            else if (product.series === this.props.series) {
                results.push(<Product product={product} />);
            }
        });

        return (
            <div className="filter-results">
                <ul className="blocks blocks_3up">
                    {results}
                </ul>
            </div>
        )
    }
}

export default ProductFilterResults;