import {combineReducers} from 'redux';
import rows from './rows';
import search from './search';

const reducer = combineReducers({
    rows,
    search,
});

export default reducer;