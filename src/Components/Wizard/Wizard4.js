import React, { Component } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateLoan, updateMortgage } from '../../redux/reducer';
import WizardHeader from './WizardHeader';

class Wizard4 extends Component {
    render() {
        // console.log(this.props)
        const { updateLoan, updateMortgage, loan, monthlyMortgage } = this.props;
        return (
            <div>
                <Header />
                <div className='wizard-container'>
                <WizardHeader id='4'/>
                    <div className='step-container'>

                        <div className='step2-container'>
                            <div><h1>Loan Amount</h1></div>
                            <input
                                className='input-70 font-15'
                                type='text'
                                placeholder={loan}
                                onChange={(e) => updateLoan(e.target.value)} />
                        </div>

                        <div className='step2-container'>
                            <div><h1>Monthly Mortgage</h1></div>
                            <input
                                className='input-70 font-15'
                                type='text'
                                placeholder={monthlyMortgage}
                                onChange={(e) => updateMortgage(e.target.value)} />
                        </div>

                        <div className='step-button-container'>
                            <Link to='/wizard/3'><button className='step-button white-text'>Previous Step</button></Link>
                            <Link to='/wizard/5'><button className='step-button white-text'>Next Step</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        loan: state.loan,
        monthlyMortgage: state.monthlyMortgage
    }
};

export default connect(mapStateToProps, { updateLoan, updateMortgage })(Wizard4);