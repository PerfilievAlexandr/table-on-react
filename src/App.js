import React, {Component} from 'react';
import Header from './components/header';
import Table from './components/table';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Table/>
            </div>
        );
    };
}

export default App;
