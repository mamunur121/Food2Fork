import React from 'react';

class ProductFilterMenu extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onFormInput (
            this.refs['seriesInput'].getDOMNode().value,
            this.refs['abvInput'].getDOMNode().checked
        );
    }

    render() {
        return (
            <form className="filter-menu">
                <label htmlFor="abvInput">Sort By ABV</label>
                <input id="abvInput" type="checkbox" checked={this.props.abv} ref="abvInput" onChange={this.handleChange} />
                <label htmlFor="seriesInput">Filter By Series</label>
                <select id="seriesInput" ref="seriesInput" onChange={this.handleChange}>
                    <option value="All">All</option>
                    <option value="Year-Round Ales">Year-Round Ales</option>
                    <option value="Dictator Series">Dictator Series</option>
                    <option value="Holy Trinity">Holy Trinity</option>
                </select>
            </form>
        );
    }
}


export default ProductFilterMenu;