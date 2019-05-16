const axios = require('axios');
import {
    GET_DATA,
    SELECT_COLUMN,
    SORT_COLUMN,
    SEARCH,
    START,
    SUCCESS,
    DRAGG_COLUMN,
    HOVER_ROW,
    LEAVE_HOVER_ROW
} from '../constants';

export function getData() {

    return (dispatch) => {

        dispatch({
            type: GET_DATA + START
        });

        axios.get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
            .then((rows) => {
                dispatch({
                    type: GET_DATA + SUCCESS,
                    payload: rows.data
                });
            })
            .catch((error) => {
                console.log(error)
            });
    };

}

export function selectColumn(columnName, sortOrderColumn) {
    return {
        type: SELECT_COLUMN,
        payload: {
            name: columnName,
            sort: sortOrderColumn
        }
    }
}

export function sortRows(sortedRows) {
    return {
        type: SORT_COLUMN,
        payload: sortedRows
    }
}

export function findRows(searchValue) {
    return {
        type: SEARCH,
        payload: searchValue
    }
}

export function dragColumn(columns, newData) {
    return {
        type: DRAGG_COLUMN,
        payload: {
            columns,
            newData
        }
    }
}


export function hoverRow(index) {
    return {
        type: HOVER_ROW,
        payload: index
    }
}

export function leaveHoverRow() {
    return {
        type: HOVER_ROW
    }
}


