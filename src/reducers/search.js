import {
    SEARCH,
} from '../constants';

export default (search = '', action) => {

    const {payload, type} = action;

    switch (type) {

        case SEARCH:
            return search = payload;

        default:
            return search;
    }
};