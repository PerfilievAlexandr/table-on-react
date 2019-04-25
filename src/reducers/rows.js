import {
    GET_DATA,
    SELECT_COLUMN,
    SORT_COLUMN,
    START,
    SUCCESS,
    DRAGG_COLUMN,
} from '../constants';

const initialState = {
    rowsList: [],
    loading: false,
    loaded: false,
    sort: {
        direction: null,
        columnName: ''
    },
    columns: null,
};

export default (rows = initialState, action) => {

    const { payload, type } = action;

    switch (type) {

        case GET_DATA + START:
            return {
                ...rows,
                loading: true,
                loaded: false
            };

        case GET_DATA + SUCCESS:

            const newArr = payload.map((item) => {
                delete item.address;
                delete item.description;
                return item;
            });

            const columnNames = Object.keys(newArr[0]).map(item => ({ [item]: item }));

            return {
                ...rows,
                rowsList: newArr,
                loading: false,
                loaded: true,
                columns: columnNames
            };

        case SELECT_COLUMN:
            return {
                ...rows,
                sort: {
                    ...rows.sort,
                    columnName: payload.name,
                    direction: payload.sort
                }
            };

        case SORT_COLUMN:
        console.log(payload, 'sort')
            return {
                ...rows,
                rowsList: payload
            };

        case DRAGG_COLUMN:
            console.log(payload, 'test')
            return {
                ...rows,
                rowsList: payload.newData,
                columns: payload.columns
            };
        default:
            return rows
    }
};