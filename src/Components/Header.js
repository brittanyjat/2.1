import React from 'react';
import headerLogo from '../header_logo.png';

export default function Header() {
    return (
        <div id='header-container'>
            <div className='header-content'>
                <div className='left-header-content'>
                    <img src={headerLogo} alt='logo' className='header-logo' />
                    <span className='white-text header-title bold'>Houser</span>
                    <span className='white-text header-title'>Dashboard</span>
                </div>
                <div className='right-header-content'>
                    <span className='white-text bold'>Logout</span>
                </div>
            </div>

        </div>
    )
}