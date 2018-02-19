import React, { Component } from 'react';
import { withRouter } from 'react-router';

class WizardHeader extends Component{

    render(){
        console.log(this.props)
        const { id } = this.props;
        return (
            <div id='wizard-header'>
                <div>
                    <span className='add-new-title'>Add new listing</span>
                    <span className='cancel-button'>Cancel</span>
                </div>
                <div>
                    <span className='step-name-indicator'>Step {id}</span>
                    <div className='step-image-indecator'>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(WizardHeader);