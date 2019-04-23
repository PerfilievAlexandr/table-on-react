import React, {Component} from 'react';
import Cell from '../cell'
import './style.css';


class Row extends Component {

    render() {

        const {row} = this.props;
        
        const rowFromCells =  row.map((cell, index) => {
            return (typeof cell !== 'object')
                ?
                <Cell
                    key={index}
                    data={cell}
                />
                :
                <Cell
                    key={index}
                    data={null}
                />
        });

        return (
            <tr
                className='row'
            >
                {rowFromCells}
            </tr>
        );
    };
}


export default Row;