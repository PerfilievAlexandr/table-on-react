import React, {Component} from 'react';
import './style.css';


class Row extends Component {

    render() {

        const {row} = this.props;

        return (
            <tr
                className='row'
            >
                <td>{row.id}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
            </tr>
        );
    };
}


export default Row;