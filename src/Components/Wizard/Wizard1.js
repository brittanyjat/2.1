import React, { Component } from 'react';
import './Wizard.css';
import Header from '../Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateName, updateDescription } from '../../reducer';

class Wizard1 extends Component {
    render() {
        // console.log(this.props)
        const { updateName, updateDescription, name, description } = this.props;
        return (
            <div>
                <Header />
                <div className='wizard-container'>
                    <div className='step-container'>
                        <h1>Property Name</h1>

                        <input
                            className='input-70'
                            placeholder={name}
                            type='text'
                            onChange={(e) => updateName(e.target.value)}>
                        </input>

                        <h1>Property Description</h1>
                        <input
                            className='input-70'
                            placeholder={description}
                            type='text'
                            onChange={(e) => updateDescription(e.target.value)}>
                        </input>
                    </div>
                    <div className='step1-button-container'>
                        <Link to='/wizard/2'><button
                            className='step-button white-text'>Next Step</button></Link>
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