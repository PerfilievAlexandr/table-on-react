import React, {Component} from 'react';
import {connect} from 'react-redux';
import {findRows} from '../../action-creators';
import './style.css';

class Search extends Component {

    state = {
        searchValue: ''
    };

    render() {
        return (
            <div className="search">
                <input
                    placeholder='Поиск'
                    onChange={this.onHandleChange}
                    value={this.state.searchValue}
                />
                <button
                    className='search__button  btn'
                    onClick={this.onHandleClick}
                >Найти</button>
            </div>
        )
    };

    onHandleChange = (evt) => {
        this.setState({
            searchValue: evt.target.value
        })
    };

    onHandleClick = () => {
        const {findRows} = this.props;
        findRows(this.state.searchValue.toLowerCase());
    };
}


export default connect(null, {findRows})(Search);