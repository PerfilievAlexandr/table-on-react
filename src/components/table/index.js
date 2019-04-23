import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData, selectColumn, sortRows } from '../../action-creators'
import { filteredRows, sortOrder, loadingData, columnNames } from '../../selectors';
import Row from '../row';
import HeaderRow from '../headerRow';
import Loader from '../loader';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import './style.css';


const Conteiner = styled.section`
      padding-top: 50px;
      background-color: #edeef0;
`;

const TableArea = styled.div`
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

        const { data, loading, columns } = this.props;

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

        if (loading) return <Loader />;

        return (
            <Conteiner>
                <TableArea>
                    <DragDropContext
                        onDragEnd={this.onDragEnd}
                    >
                        <HeaderRow
                            row={columns}
                        />
                        {/* {rows} */}
                    </DragDropContext>
                </TableArea>
            </Conteiner>
        );
    };



    onDragEnd = () => {

    };

    componentDidMount() {
        const { getData } = this.props;

        getData();
    };

}


export default connect(
    (store) => ({
        data: filteredRows(store),
        sortOrder: sortOrder(store),
        loading: loadingData(store),
        columns: columnNames(store)
    }),
    { getData, selectColumn, sortRows }
)(Table);