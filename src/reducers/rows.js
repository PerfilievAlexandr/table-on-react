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
            const columns = Object.keys(payload[0]);

            const columnsObjectApiarence = columns.map((item) => {
                let id = Math.floor(Math.random() * 10000);
                return {[id]: {id: id, content: item}}
            });
            return {
                ...rows,
                rowsList: payload,
                loading: false,
                loaded: true,
                columns: columnsObjectApiarence
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