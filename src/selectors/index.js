import {createSelector} from 'reselect'

export const columnName = (state) => state.rows.sort.columnName;

export const sortOrder = (state) => state.rows.sort.direction;

export const allRows = (state) => state.rows.rowsList;

export const loadingData = (state) => state.rows.loading;

export const searchValue = (state) => state.search;

export const foundRows = createSelector(allRows, searchValue, (rows, search) => {
    if (search) {
        return rows.filter((row) => {
            return row.id.toString().toLowerCase().includes(search) || row.firstName.toLowerCase().includes(search) || row.lastName.toLowerCase().includes(search) || row.email.toLowerCase().includes(search) || row.phone.toLowerCase().includes(search)
        });
    }
    return rows;

});

export const filteredRows = createSelector(foundRows, columnName, sortOrder, (rows, name, sortOrder) => {
    return rows.sort((a, b) => {
        if (typeof a !== 'number' && sortOrder === 'INCREASE' && a[name] > b[name]) return 1;
        if (typeof a !== 'number' && sortOrder === 'DECREASE' && a[name] > b[name]) return -1;
        if (typeof a !== 'number' && sortOrder === 'INCREASE' && a[name] < b[name]) return -1;
        if (typeof a !== 'number' && sortOrder === 'DECREASE' && a[name] < b[name]) return 1;
        if (typeof a === 'number' && sortOrder === 'INCREASE') return a[name] - b[name];

        return b[name] - a[name];
    })
});