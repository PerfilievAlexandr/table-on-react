import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {hoverRow, leaveHoverRow} from '../../action-creators'
import { rowIndex } from '../../selectors';


const Conteiner = styled.div`
    border: 1px solid black;
    padding: 15px;
    color: ${(props) => props.index === props.indexOfRow ? 'red' : 'grey'
    }
`;

class Cell extends Component {

    render() {
        const { data, index, indexOfRow} = this.props;
        return <Conteiner
            onMouseEnter={this.onMouseEnterCell}
            index={index}
            indexOfRow={indexOfRow}
            onMouseLeave={this.onMouseLeaveCell}
        >{data}</Conteiner>
    };

    onMouseEnterCell = () => {
        const {index, hoverRow} = this.props;
        hoverRow(index)
    }

    onMouseLeaveCell = () => {
        const {leaveHoverRow} = this.props;
        leaveHoverRow()
    }
}


export default connect((store) => ({
    indexOfRow: rowIndex(store)
}),
    {hoverRow, leaveHoverRow}
)(Cell);