import React, {Component} from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Conteiner = styled.td`
    border: 1px solid black;
    padding: 15px;
`;

class Cell extends Component {

    render() {

        const {data} = this.props;
        console.log(data, 'td')

        return <Conteiner>{data[0].content}</Conteiner>;
    };
}


export default Cell;