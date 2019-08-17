import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }

    render() {
        const {filterText, inStockOnly} = this.props;
        return (
                <form>
                    <input
                        type="text"
                        placeholder="Search..."
                        className='form-control'
                        value={filterText}
                        onChange={this.handleFilterTextChange}
                    />
                    <p>
                        <input
                            type="checkbox"
                            className='form-check-label'
                            checked={inStockOnly}
                            onChange={this.handleInStockChange}
                        />
                        Only show products in stock
                    </p>
                </form>
        );
    }
}


export default SearchBar;