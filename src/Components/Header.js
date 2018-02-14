import React, { Component } from 'react';
import headerLogo from '../header_logo.png';
import axios from 'axios';
import { withRouter } from 'react-router';

class Header extends Component {
    constructor(props) {
        super(props);
    }


    logout() {
        const { history } = this.props;
        axios.post('/api/logout').then(history.push('/'));
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