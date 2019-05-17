import React, {Component} from 'react';
import './style.css';
import {connect} from 'react-redux';
import {openForm} from '../../selectors';
import {closeForm, refactRow} from '../../action-creators';
import styled from 'styled-components';

class Form extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    };

    render() {

        const {openForm} = this.props;

        if (!openForm) return null;

        return (
            <div className='form'>
                <div className='form__container'>
                    <button
                        className='form__close'
                        onClick={this.onCloseForm}
                    >закрыть
                    </button>
                    <h2 className='form__title'>Добавить пользователя</h2>
                    <label htmlFor="formFirstName"><strong>First name</strong>
                        <input
                            type="text"
                            onChange={this.onHandleChangeFirstName}
                            id='formFirstName'
                            name='formFirstName'
                            value={this.state.firstName}
                            placeholder='first name'
                            required
                        />
                    </label>
                    <label htmlFor="formLastName"><strong>Last name</strong>
                        <input
                            type="text"
                            onChange={this.onHandleChangeLastName}
                            id='formLastName'
                            name='formLastName'
                            value={this.state.lastName}
                            placeholder='last name'
                            required
                        />
                    </label>
                    <label htmlFor="formEmail"><strong>Email</strong>
                        <input
                            type="text"
                            onChange={this.onHandleChangeEmail}
                            id='formEmail'
                            name='formEmail'
                            value={this.state.email}
                            placeholder='email'
                            required
                        />
                    </label>
                    <label htmlFor="formPhone"><strong>Phone</strong>
                        <input
                            type="number"
                            onChange={this.onHandleChangePhone}
                            id='formPhone'
                            name='formPhone'
                            value={this.state.phone}
                            placeholder='phone'
                            required
                        />
                    </label>

                    <button
                        type='submit'
                        className="form__send-form btn"
                        onClick={this.onSubmit}
                    >
                        Добавить
                    </button>
                </div>
            </div>
        );

    };

    onHandleChangeFirstName = (evt) => {
        this.setState({
            firstName: evt.target.value
        })
    };

    onHandleChangeLastName = (evt) => {
        this.setState({
            lastName: evt.target.value
        })
    };

    onHandleChangeEmail = (evt) => {
        this.setState({
            email: evt.target.value
        })
    };

    onHandleChangePhone = (evt) => {
        this.setState({
            phone: evt.target.value
        })
    };

    onCloseForm = () => {
        const {closeForm} = this.props;
        closeForm();
    };

    onSubmit = (evt) => {
        evt.preventDefault();

        const {closeForm, refactRow} = this.props;

        if (this.state.firstName && this.state.lastName && this.state.email && this.state.phone) {
            refactRow(this.state);
            closeForm();

            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
            });
        }
    };
}


export default connect(
    (store) => ({
        openForm: openForm(store)
    })
    ,
    {closeForm, refactRow})(Form)

