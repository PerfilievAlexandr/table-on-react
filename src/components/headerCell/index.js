import React, { Component } from 'react';
import styled from 'styled-components';
import { selectColumn, sortRows } from '../../action-creators';
import { connect } from 'react-redux';
import { INCREASE, DECREASE } from '../../constants';
import { sortOrder, filteredRows, columnName } from '../../selectors';





const Conteiner = styled.div`
    border: 1px solid black;
    padding: 15px;
    padding-right: 15px;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    color: black;
    cursor: pointed;

    &:hover {
        opacity: 0.5;
    }

    background-color: ${props => {
        if (props.data === props.columnName && props.sort === INCREASE) {
            return 'green'
        } else if (props.data === props.columnName && props.sort === DECREASE) {
            return 'red'
        } else {
            return 'none'
        }
    }
    };
`;

class HeaderCell extends Component {

    render() {

        const { data, sortOrder, columnName } = this.props;

        return (
            <Conteiner
                onClick={this.onHandleClickSort}
                sort={sortOrder}
                data={data[0]}
                columnName={columnName}

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
        columnName: columnName(store)
    }),
    { selectColumn, sortRows }
)(HeaderCell);