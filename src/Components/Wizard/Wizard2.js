import React, { Component } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';

export default class Wizard2 extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='wizard-container'>
                    <div className='step-container'>

                        <div className='step2-container'>
                            <div><h1>Address</h1></div>
                            <input className='input-70'></input>
                        </div>

                        <div className='step2-container'>
                            <div><h1>City</h1></div>
                            <input></input>
                            <div><h1>State</h1></div>
                            <input></input>
                        </div>

                        <div className='step2-container'>
                            <div><h1>Zip</h1></div>
                            <input></input>
                        </div>
                        <div className='step-button-container'>
                            <Link to='/wizard/1'><button className='step-button white-text'>Previous Step</button></Link>
                            <Link to='/wizard/3'><button className='step-button white-text'>Next Step</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}