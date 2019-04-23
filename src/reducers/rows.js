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
            console.log(columns, 'reduser');

            const columnsObjViu = columns.map((item) => {
                let id = Math.floor(Math.random() * 10000);
                return {[item]: {id: id, content: item}}
            })

            // const columnsObjViu = columns.reduce((acc, curr) => {
            //     let id = Math.floor(Math.random() * 10000);
            //     return {...acc, [id]: {id: id, content: curr}}
            // }, {})

            return {
                ...rows,
                rowsList: payload,
                loading: false,
                loaded: true,
                columns: columnsObjViu
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