import React, { Component } from 'react';
import styled from 'styled-components';


const Conteiner = styled.div`
    border: 1px solid black;
    padding: 15px;
`;

class Cell extends Component {

    render() {
        const { data } = this.props;
        return <Conteiner>{data}</Conteiner>
    };
}


export default Cell;