import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userData, userActive} from '../../selectors';
import './style.css';

class User extends Component {
    render() {

        const {user, show} = this.props;

        if (!show) return null;

        return (
            <section className='user'>
                <div className='user__wrapper'>
                    <p>Выбран пользователь <b>{user.firstName} {user.lastName}</b></p>
                    <p>Описание: {user.description}</p>
                    <p>Адрес проживания: <b>{user.address.streetAddress}</b></p>
                    <p>Город: <b>{user.address.city}</b></p>
                    <p>Провинция/штат: <b>{user.address.state}</b></p>
                    <p>Индекс: <b>{user.address.zip}</b></p>
                </div>
            </section>
        );
    };
}

export default connect(
    (store) => ({
        user: userData(store),
        show: userActive(store)
    })
)(User);