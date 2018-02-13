import React, { Component } from 'react';
import './Wizard.css';
import Header from '../Header';

export default class Wizard1 extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='wizard-container'>
                    <h1>Property Name</h1>
                    <input className='input-70'></input>
                    <h1>Property Description</h1>
                    <input className='input-70'></input>
                    <button
                        className='step-button white-text'>Next Step</button>
                </div>
            </div>
        )
    }
}