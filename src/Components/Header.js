import React, { Component } from 'react';
import headerLogo from '../assets/header_logo.png';
import axios from 'axios';
import { withRouter } from 'react-router';

class Header extends Component {
    
    logout() {
        const { history } = this.props;
        axios.post('/api/logout').then(response => {
            // console.log(response);
            history.push('/');
        });
    }

    render() {
        // console.log(this.props)
        return (
            <div id='header-container'>
                <div className='header-content'>
                    <div className='left-header-content'>
                        <img src={headerLogo} alt='logo' className='header-logo' />
                        <span className='white-text header-title bold'>Houser</span>
                        <span className='white-text header-title'>Dashboard</span>
                    </div>
                    <div className='right-header-content'>
                        <span className='white-text bold logout' onClick={() => this.logout()}>Logout</span>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(Header);