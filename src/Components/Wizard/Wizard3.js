import React, { Component } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';

export default class Wizard3 extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='wizard-container'>
                    <div className='step-container'>
                        <div className='step3-image-container'>
                            <img />
                        </div>
                        <div className='step2-container'>
                            <div><h1>Image URL</h1></div>
                            <input className='input-70'></input>
                        </div>
                        <div className='step-button-container'>
                            <Link to='/wizard/2'><button className='step-button white-text'>Previous Step</button></Link>
                            <Link to='/wizard/4'><button className='step-button white-text'>Next Step</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}