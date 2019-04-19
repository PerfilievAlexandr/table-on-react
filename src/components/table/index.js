import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getData, selectColumn, sortRows} from '../../action-creators'
import {filteredRows, sortOrder, loadingData} from '../../selectors';
import Row from '../row';
import Loader from '../loader';
import {INCREASE, DECREASE} from '../../constants';
import './style.css';

class Table extends Component {

    render() {
        const {data, loading} = this.props;
        const rows = data.map((row) => {
            return (
                <Row
                    key={row.id + Math.random()}
                    row={row}
                />
            )
        });

        if (loading) return <Loader/>;

        return (
            <section className='table'>
                <table className='table__area'>
                    <thead>
                    <tr onClick = {this.onHandleClickSort}>
                        <th><button
                            value = 'id'
                            className='table__btn'
                            onClick={this.onActive}
                        >ID</button>
                        </th>
                        <th><button
                            value = 'firstName'
                            className='table__btn'
                        >First name</button>
                        </th>
                        <th><button
                            value = 'lastName'
                            className='table__btn'
                        >Last name</button>
                        </th>
                        <th><button
                            value = 'email'
                            className='table__btn'
                        >Email</button>
                        </th>
                        <th><button
                            value = 'phone'
                            className='table__btn'
                        >Phone</button>
                        </th>
                    </tr>
                    {rows}
                    </thead>
                </table>
            </section>
        );
    };

    onHandleClickSort = (evt) => {
        const {selectColumn, data, sortRows, sortOrder} = this.props;
        let sortOrderColumn = sortOrder !== INCREASE ? INCREASE : DECREASE;

        selectColumn(evt.target.value, sortOrderColumn);
        sortRows(data);
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
    }),
    {getData, selectColumn, sortRows}
)(Table);