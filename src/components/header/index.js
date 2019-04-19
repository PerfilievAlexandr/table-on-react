import React, {Component} from 'react';
import Search from '../search'
import './style.css';

class Header extends Component {

    render() {

        return (
           <header className='header'>
               <Search />
           </header>
        );
    };

    onShowAddUserForm = () => {
        const {showUserForm} = this.props;
        showUserForm()
    };
}


export default Header;