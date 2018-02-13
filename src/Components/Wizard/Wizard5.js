import React, { Component } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';

export default class Wizard5 extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='wizard-container'>
                    <div className='step-container'>
                        <h3>Recommended Rent $</h3>
                        <div className='step2-container'>
                            <div><h1>Desired Rent</h1></div>
                            <input className='input-70'></input>
                        </div>
                        <div className='step-button-container'>
                            <Link to='/wizard/4'><button className='step-button white-text'>Previous Step</button></Link>
                            <Link to='/dashboard'><button className='complete-button white-text filter'>Complete</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}