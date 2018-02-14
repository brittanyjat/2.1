import React, { Component } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateDesired } from '../../reducer';
import axios from 'axios';


class Wizard5 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            desiredRent: this.props,
            monthlyMortgage: this.props,
            address: this.props,
            city: this.props,
            state: this.props,
            zip: this.props,
            name: this.props,
            description: this.props,
            imageUrl: this.props,
            loan: this.props,
        }
        this.handleComplete = this.handleComplete.bind(this);
    }

    handleComplete() {
        const { history } = this.props;
        const { desiredRent, monthlyMortgage, address, city, state, zip, name, description, imageUrl, loan } = this.state;
        let body = { name, description, loan, monthlyMortgage, desiredRent, address, city, state, zip, imageUrl };

        axios.post('/api/properties', body).then(res => {
            history.push('/dashboard');
        });
    }

    render() {
        const { updateDesired } = this.props;
        console.log(this.props);
        return (
            <div>
                <Header />
                <div className='wizard-container'>
                    <div className='step-container'>

                        <h3>Recommended Rent ${this.state.monthlyMortgage * 1.25}</h3>

                        <div className='step2-container'>
                            <div><h1>Desired Rent</h1></div>
                            <input
                                className='input-70'
                                type='text'
                                placeholder={this.state.desiredRent}
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
        imageUrl: state.imageUrl
    }
};

export default connect(mapStateToProps, { updateDesired })(Wizard5);