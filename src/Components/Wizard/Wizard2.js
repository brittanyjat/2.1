import React, { Component } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateAddress, updateCity, updateState, updateZip } from '../../redux/reducer';
import WizardHeader from './WizardHeader';


class Wizard2 extends Component {
    render() {
        // console.log(this.props)
        const { updateAddress, updateCity, updateState, updateZip, address, state, city, zip } = this.props;
        return (
            <div>
                <Header />
                <div className='wizard-container'>
                <WizardHeader id='2'/>
                    <div className='step-container'>

                        <div className='step2-container'>
                            <div><h1>Address</h1></div>

                            <input
                                className='input-70'
                                value={address}
                                type='text'
                                onChange={(e) => updateAddress(e.target.value)} />
                        </div>

                        <div className='step2-container'>
                            <div><h1>City</h1></div>

                            <input
                                value={city}
                                type='text'
                                onChange={(e) => updateCity(e.target.value)} />

                            <div><h1>State</h1></div>

                            <input
                                value={state}
                                type='text'
                                onChange={(e) => updateState(e.target.value)} />
                        </div>

                        <div className='step2-container'>
                            <div><h1>Zip</h1></div>
                            
                            <input
                                value={zip}
                                type='text'
                                onChange={(e) => updateZip(e.target.value)} />
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

var mapStateToProps = (state) => {
    return {
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip
    }
};

export default connect(mapStateToProps, { updateAddress, updateCity, updateState, updateZip })(Wizard2);