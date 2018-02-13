import React, { Component } from 'react';
import authLogo from '../auth_logo.png';
// import axios from 'axios';

export default class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(prop, value) {
        this.setState({
            [prop]: value
        });
    }

    //==== make axios call to login with state as body ==//

    render() {
        // console.log(this.props)
        // console.log(this.state)
        const  { history } = this.props;
        const { username, password } = this.state;
        return (
            <div className='auth-dashboard'>
                <img src={authLogo} alt='logo' className='auth-logo' />
                <h2>Username</h2>
                <input
                    className='input-70'
                    onChange={(event) => this.handleChange('username', event.target.value)}
                    value={username}>
                </input>
                <h2>Password</h2>
                <input
                    className='input-70'
                    onChange={(event) => this.handleChange('password', event.target.value)}
                    value={password}>
                </input>
                <div className='auth-button-container'>
                    <button className='auth-button' onClick={(e) => history.push('/dashboard')}>Login</button>
                    <button className='auth-button' onClick={(e) => history.push('/dashboard')}>Register</button>
                </div>
            </div>
        )
    }
}