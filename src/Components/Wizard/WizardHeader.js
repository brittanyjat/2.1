import React, { Component } from 'react';
import active from '../../assets/step_active.png';
import completed from '../../assets/step_completed.png';
import inactive from '../../assets/step_inactive.png';
import { connect } from 'react-redux';
import { clearState } from '../../redux/reducer';
import { withRouter } from 'react-router';

class WizardHeader extends Component {

    render() {
        // console.log(this.props)
        const { clearState, history } = this.props;
        const { id } = this.props;
        return (
            <div id='wizard-header'>
                <div className='add-cancel-container bold'>
                    <span className='add-new-title'>Add new listing</span>
                    <button 
                        className='cancel-button bold'
                        onClick={() => { 
                            clearState(); 
                            history.push('/dashboard'); }} >
                        Cancel
                    </button>
                </div>
                <div className='step-header-container'>
                    <span className='step-name-indicator'>Step {id}</span>
                    <div className='step-image-indicator'>
                        <img src={id === 1 ? active : completed} alt='step-indicator'/>
                        <img src={id < 2 ? inactive : id === 2 ? active : completed} alt='step-indicator'/>
                        <img src={id < 3 ? inactive : id === 3 ? active : completed} alt ='step-indicator'/>
                        <img src={id < 4 ? inactive : id === 4 ? active : completed} alt='step-indicator'/>
                        <img src={id < 5 ? inactive : id === 5 ? active : completed} alt='step-indicator'/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    clearState
};

export default withRouter(connect(null, mapDispatchToProps)(WizardHeader));