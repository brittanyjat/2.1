import React, { Component } from 'react';
import authLogo from '../assets/auth_logo.png';
import { connect } from 'react-redux';
import { register, login } from '../redux/reducer';

class Home extends Component {
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

    render() {
        // console.log(this.props)
        // console.log(this.state)
        const { history, register, login } = this.props;
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
                    <button className='auth-button' onClick={() => login({ username, password }, history)}>Login</button>
                    <button className='auth-button' onClick={() => register({ username, password }, history)}>Register</button>
                </div>
            </div>
        )
    }
}


export default connect(state => state, { register, login })(Home);