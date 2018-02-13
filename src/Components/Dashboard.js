import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
    render() {
        return (
            <div id='dashboard-main'>
                <div><Header /></div>
                <div className='dashboard-container'>
                    <Link to='/wizard/1'><button className='add-new-button font-20 bold'>Add new property</button></Link>
                    <div className='filter-container'>
                        <span className='font-20'>List properties with "desired rent" greater than: $</span>
                        <input
                            className='filter-input'
                            placeholder='0'>
                        </input>
                        <button className='filter-button filter'>Filter</button>
                        <button className='filter-button white-text reset'>Reset</button>
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}