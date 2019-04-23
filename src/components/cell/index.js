import React, {Component} from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Conteiner = styled.td`
    border: 1px solid black;
    padding: 15px;
`;

class Cell extends Component {

    render() {
        const {data, index, id} = this.props;
        return (
            <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                    <Conteiner 
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >{data}</Conteiner>
                )}
            </Draggable>
        )
    };
}


export default Cell;