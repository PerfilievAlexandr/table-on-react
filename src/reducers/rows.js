import {
    GET_DATA,
    SELECT_COLUMN,
    SORT_COLUMN,
    START,
    SUCCESS,
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

    const {payload, type} = action;

    switch (type) {
        
        case GET_DATA + START:
            return {
                ...rows,
                loading: true,
                loaded: false
            };

        case GET_DATA + SUCCESS:
            const copyPayload = payload;
            const data = copyPayload.map((item) => {
                delete  item.address;
                delete item.description;
                return Object.values(item);
            });
            const columnNames = Object.keys(payload[0]);

            return {
                ...rows,
                rowsList: data,
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
            
            return {
                ...rows,
                rowsList: payload
            };
        default:
            return rows
    }
};