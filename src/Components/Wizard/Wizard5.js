import React, { Component } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateDesired } from '../../reducer';

class Wizard5 extends Component {
    render() {
        const { updateDesired, desiredRent, monthlyMortgage } = this.props;
        return (
            <div>
                <Header />
                <div className='wizard-container'>
                    <div className='step-container'>

                        <h3>Recommended Rent ${monthlyMortgage * 1.25}</h3>

                        <div className='step2-container'>
                            <div><h1>Desired Rent</h1></div>
                            <input
                                className='input-70'
                                type='text'
                                placeholder={desiredRent}
                                onChange={(e) => updateDesired(e.target.value)} />
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

var mapStateToProps = (state) => {
    return {
        desired: state.desiredRent,
        monthlyMortgage: state.monthlyMortgage
    }
};

export default connect(mapStateToProps, { updateDesired })(Wizard5);