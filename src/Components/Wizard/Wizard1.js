import React, { Component } from 'react';
import './Wizard.css';
import Header from '../Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateName, updateDescription } from '../../redux/reducer';
import WizardHeader from './WizardHeader';

class Wizard1 extends Component {
    render() {
        // console.log(this.props)
        const { updateName, updateDescription, name, description } = this.props;

        return (
            <div>
                <Header />

                <div className='wizard-container'>

                    <WizardHeader id='1' />

                    <div className='step-container'>
                        <div className='step-child'><h1>Property Name</h1></div>

                        <input
                            className='input-70 font-15'
                            value={name}
                            type='text'
                            onChange={(e) => updateName(e.target.value)}>
                        </input>

                        <div className='step-child'><h1>Property Description</h1></div>

                        <input
                            className='input-70 font-15 height-100'
                            value={description}
                            type='text'
                            onChange={(e) => updateDescription(e.target.value)}>
                        </input>

                        <div className='step1-button-container'>
                            <Link to='/wizard/2'>
                                <button className='step-button white-text'>Next Step</button>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        name: state.name,
        description: state.description
    };
}

export default connect(mapStateToProps, { updateName, updateDescription })(Wizard1);