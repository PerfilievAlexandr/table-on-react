import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData, selectColumn, sortRows, dragColumn } from '../../action-creators'
import { arrFilteredRows, loadingData, arrColumnNames } from '../../selectors';
import Column from '../column';
import Loader from '../loader';
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Conteiner = styled.section`
      padding-top: 50px;
      background-color: #edeef0;
`;

const TableArea = styled.div`
    display: flex;

    margin: 0 auto;
    width: 70%;

    box-sizing: border-box;
    border: 1px solid #777777;
    border-collapse: collapse;
    background-color: white;
`;

class Table extends Component {

    render() {

        const { data, loading, columnsName } = this.props;

        

        const columns = columnsName
            ?
            columnsName.map((column, index) => {
                const columnData = data.map((item) => item[index]);
                return (
                    <Column
                        key={index}
                        columnName={column}
                        index={index}
                        columnData={columnData}
                        idForColumn={index.toString()}
                        keyForColumn={index}
                        onClick={this.onHandleClickSort}
                    />
                )
            })
            :
            null;

        if (loading) return <Loader />;

        return (
            <Conteiner>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId='droppableId' direction='horizontal'>
                        {(provided) => (
                            <TableArea
                                ref={provided.innerRef}
                            >
                                {columns}
                                {provided.placeholder}
                            </TableArea>
                        )}
                    </Droppable>
                </DragDropContext>
            </Conteiner>
        );
    };



    onDragEnd = (result) => {
        const {destination, source, draggableId} = result;
        const {columnsName, dragColumn, data} = this.props;

        if (!destination) return;

        if (destination.draggableId === source.draggableId && destination.index === source.index) return; 

        const newColumnHeaders = [...columnsName];
        const draggableColumn = newColumnHeaders[draggableId];
        newColumnHeaders.splice(source.index, 1);
        newColumnHeaders.splice(destination.index, 0, draggableColumn);

        const newData = [...data].map((row) => {
            const draggableColumn = row[draggableId];
            row.splice(source.index, 1);
            row.splice(destination.index, 0, draggableColumn);
            const newRow = row.reduce((acc, curr, index) => ({...acc, [newColumnHeaders[index]]: curr}), {})
            return {...newRow};
        });

        dragColumn(newColumnHeaders, newData);
    };



    componentDidMount() {
        const { getData } = this.props;

        getData();
    };

}


export default connect(
    (store) => ({
        data: arrFilteredRows(store),
        loading: loadingData(store),
        columnsName: arrColumnNames(store),
    }),
    { getData, selectColumn, sortRows, dragColumn }
)(Table);