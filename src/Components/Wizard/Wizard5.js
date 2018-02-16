import React, { Component } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateDesired, clearState } from '../../reducer';
import axios from 'axios';


class Wizard5 extends Component {
    constructor(props) {
        super(props);

        this.handleComplete = this.handleComplete.bind(this);
    }

    handleComplete() {
        const { history, clearState } = this.props;
        let body = {
            name: this.props.name,
            description: this.props.description,
            loan: this.props.loan,
            monthly: this.props.monthlyMortgage,
            recommended: this.props.recommended,
            desired: this.props.desired,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip,
            imageUrl: this.props.imageUrl,
        }
        // console.log(body)
        axios.post('/api/properties', body).then(res => {
            clearState();
            history.push('/dashboard');
        });
    }

    render() {
        const { updateDesired, recommended } = this.props;
        console.log(this.props);
        return (
            <div>
                <Header />
                <div className='wizard-container'>
                    <div className='step-container'>

                        <h3>Recommended Rent ${recommended}</h3>

                        <div className='step2-container'>
                            <div><h1>Desired Rent</h1></div>
                            <input
                                className='input-70'
                                type='text'
                                value={this.props.desiredRent}
                                onChange={(e) => updateDesired(e.target.value)} />
                        </div>

                        <div className='step-button-container'>
                            <Link to='/wizard/4'><button className='step-button white-text'>Previous Step</button></Link>
                            <button
                                className='complete-button white-text filter'
                                onClick={() => this.handleComplete()}
                            >Complete</button>
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
        monthlyMortgage: state.monthlyMortgage,
        name: state.name,
        description: state.description,
        loan: state.loan,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        imageUrl: state.imageUrl,
        recommended: state.recommended
    }
};

export default connect(mapStateToProps, { updateDesired, clearState })(Wizard5);