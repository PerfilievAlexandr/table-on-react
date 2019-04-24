import React, { Component } from 'react';
import styled from 'styled-components';
import { selectColumn, sortRows } from '../../action-creators';
import { connect } from 'react-redux';
import {INCREASE, DECREASE} from '../../action-creators'




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

        console.log(data[0], 'headerCell')
        return (
            <Conteiner
                onClick={this.onHandleClickSort}
            >
                {data[0]}
            </Conteiner>
        )
    };

    onHandleClickSort = (evt) => {
        console.log(evt.target.textContent)
        const { selectColumn, data, sortRows, sortOrder } = this.props;
        let sortOrderColumn = sortOrder !== INCREASE ? INCREASE : DECREASE;


        selectColumn(evt.target.textContent, sortOrderColumn);
        sortRows(data);
    };

}


export default connect(
    null,
    { selectColumn, sortRows }
)(HeaderCell);