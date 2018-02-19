import React, { Component } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import {connect }  from 'react-redux';
import {updateImg} from '../../redux/reducer';
import WizardHeader from './WizardHeader';

class Wizard3 extends Component {
    render() {
        // console.log(this.props)
        const { updateImg, imageUrl } = this.props;
        return (
            <div>
                <Header />
                <div className='wizard-container'>
                <WizardHeader id='3'/>
                    <div className='step-container'>
                        <div className='wizard-image-container'>
                            <img src={imageUrl} className='wizard-image' alt='Preview'/>
                        </div>

                        <div className='step2-container'>
                            <div><h1>Image URL</h1></div>

                            <input 
                                className='input-70' 
                                value={imageUrl}
                                type='text'
                                onChange={(e) => updateImg(e.target.value)}/>
                        </div>

                        <div className='step-button-container'>
                            <Link to='/wizard/2'><button className='step-button white-text'>Previous Step</button></Link>
                            <Link to='/wizard/4'><button className='step-button white-text'>Next Step</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        imageUrl : state.imageUrl
    }
};

export default connect(mapStateToProps, {updateImg})(Wizard3);