import React, {Component} from 'react';
import Cell from '../cell';

class HeaderRow extends Component {

    render() {
        const {row} = this.props;
        console.log(row, 'row')
        const rowFromCells = row ?
            row.map((cell, index) => {
                
                return  <Cell
                    key={index}
                    data={Object.values(cell)}
                />
            })
            :
            null;

        return <tr>{rowFromCells}</tr>;
    };
}


export default HeaderRow;