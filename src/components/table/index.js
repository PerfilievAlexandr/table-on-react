import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getData, selectColumn, sortRows} from '../../action-creators'
import {filteredRows, sortOrder, loadingData, columnNamesArr} from '../../selectors';
import Row from '../row';
import HeaderRow from '../headerRow';
import Loader from '../loader';
import {INCREASE, DECREASE} from '../../constants';
import styled from 'styled-components';
import {DragDropContext} from 'react-beautiful-dnd';
import {Droppable} from 'react-beautiful-dnd'
import './style.css';


const Conteiner = styled.section`
      padding-top: 50px;
      background-color: #edeef0;
`;

const TableArea = styled.table`
    margin: 0 auto;
    width: 70%;

    box-sizing: border-box;
    border: 1px solid #777777;
    border-collapse: collapse;
    background-color: white;

    color: #777777;
`;

class Table extends Component {

    render() {

        const {data, loading, columns} = this.props;

        const rows = data
            ?
            data.map((row) => {
                return (
                    <Row
                        key={row.id + Math.random()}
                        row={Object.values(row)}
                    />
                )
            })
            :
            null;

        const rowHead = columns
            ?
            columns.map((column) => Object.values(column)[0])
            :
            null;


        if (loading) return <Loader/>;

        return (
            <Conteiner>
                <TableArea>
                    <thead>
                    <DragDropContext
                        onDragEnd={this.onDragEnd}
                    >
                        <Droppable droppableId={0}>
                            {(provided) => (
                                <HeaderRow
                                    row={rowHead}
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    {provided.placeholder}
                                />
                            )}

                        </Droppable>
                        {rows}
                    </DragDropContext>
                    </thead>
                </TableArea>
            </Conteiner>
        );
    };

    // onHandleClickSort = (evt) => {
    //     const {selectColumn, data, sortRows, sortOrder} = this.props;
    //     let sortOrderColumn = sortOrder !== INCREASE ? INCREASE : DECREASE;
    //
    //     selectColumn(evt.target.value, sortOrderColumn);
    //     sortRows(data);
    // };

    onDragEnd = () => {

    };

    componentDidMount() {
        const {getData} = this.props;

        getData();
    };

}


export default connect(
    (store) => ({
        data: filteredRows(store),
        sortOrder: sortOrder(store),
        loading: loadingData(store),
        columns: columnNamesArr(store)
    }),
    {getData, selectColumn, sortRows}
)(Table);