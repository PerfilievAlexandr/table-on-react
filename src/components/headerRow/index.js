import React, {Component} from 'react';
import Cell from '../cell';
import {connect} from 'react-redux';
import {getData, selectColumn, sortRows} from '../../action-creators';
import {filteredRows, sortOrder} from '../../selectors';
import {INCREASE, DECREASE} from '../../constants';

class HeaderRow extends Component {

    render() {
        
        const {row} = this.props;

        const rowFromCells = row ?
            row.map((cell, index) => {
                return  <Cell
                    key={index}
                    data={cell.content}
                />
            })
            :
            null;

        return <tr
            onClick={this.onHandleClickSort}
        >{rowFromCells}</tr>;
    };

        onHandleClickSort = (evt) => {
        const {selectColumn, data, sortRows, sortOrder} = this.props;
        let sortOrderColumn = sortOrder !== INCREASE ? INCREASE : DECREASE;
    
        selectColumn(evt.target.textContent, sortOrderColumn);
        sortRows(data);
    };
}


export default connect(
    (store) => ({
        data: filteredRows(store),
        sortOrder: sortOrder(store),
    }),
    {getData, selectColumn, sortRows}
)(HeaderRow);