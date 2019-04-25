import React, { Component } from 'react';
import styled from 'styled-components';
import Cell from '../cell';
import HeaderCell from '../headerCell';
import { Draggable } from 'react-beautiful-dnd';

const Conteiner = styled.div`
    width: 100%;  
    padding-top: 50px;
    background-color: #edeef0;
    border: 0.5px solid black;
`;


class Column extends Component {

    render() {

        const { columnName, columnData, keyForColumn, idForColumn, index } = this.props;

        const data = columnData.map((item, index) => (
            <Cell
                data={item}
                key={index}
            />
        ));

        return (
            <Draggable key={keyForColumn} draggableId={idForColumn} index={index}>
                {(provided) => (
                    <Conteiner
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <HeaderCell 
                            data={columnName}
                        />
                        {data}
                    </Conteiner>
                )}
            </Draggable>
        )
    }

}


export default Column;