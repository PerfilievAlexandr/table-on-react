import React, { Component } from 'react';
import styled from 'styled-components';
import { selectColumn, sortRows } from '../../action-creators';
import { connect } from 'react-redux';
import {INCREASE, DECREASE} from '../../constants';
import { sortOrder, filteredRows } from '../../selectors';





const Conteiner = styled.div`
    border: 1px solid black;
    padding: 15px;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    color: black;
`;

class HeaderCell extends Component {

    render() {

        const { data } = this.props;

        return (
            <Conteiner
                onClick={this.onHandleClickSort}
            >
                {data[0]}
            </Conteiner>
        )
    };

    onHandleClickSort = (evt) => {
        const { selectColumn, sortedRows, sortRows, sortOrder } = this.props;
        let sortOrderColumn = sortOrder !== INCREASE ? INCREASE : DECREASE;
        const newRows = sortedRows.slice();


        selectColumn(evt.target.textContent, sortOrderColumn);
        sortRows(newRows);
    };
}


export default connect(
    (store) => ({
        sortOrder: sortOrder(store),
        sortedRows: filteredRows(store),
    }),
    { selectColumn, sortRows }
)(HeaderCell);