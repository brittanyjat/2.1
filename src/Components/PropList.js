import React, { Component } from 'react';
import './PropList.css';
import deleteIcon from '../delete_icon.png';
import axios from 'axios';

export default class PropList extends Component {

    handleDelete(propertyid){
        axios.delete(`/api/properties/${propertyid}`).then(response => {
            this.props.history.history.go();
        })
    }

    render() {
        console.log(this.props)
        const properties = this.props.properties;

        const propertyList = properties.map((home, i) => {
            // console.log(home.id)
            return (
                <div key={i} className='home-listing-container'>

                    <div className='home-listing-child'>
                        <img src={home.imgurl} alt='listing' className='listing-img-container' />
                    </div>

                    <div className='home-listing-child'>
                        <h4>{home.name}</h4>
                        <p>{home.description}</p>
                    </div>

                    <div className='home-listing-child'>
                        <span>Loan: {home.loan}</span>
                        <span>Monthly Mortgage: {home.monthly}</span>
                        <span>Recommended Rent: {home.recommended}</span>
                        <span>Desired Rent: {home.desired}</span>
                        <span>Address: {home.address}</span>
                        <span>City: {home.city}</span>
                        <span>State: {home.state}</span>
                        <span>Zip: {home.zip}</span>
                    </div>

                    <span>
                        <img 
                            src={deleteIcon} 
                            className='delete-icon' 
                            alt='x' 
                            onClick={() => this.handleDelete(home.id)}
                    />
                    </span>
                </div>
            )
        })
        return (
            <div>
                <h1>Home Listings</h1>
                {propertyList}
            </div>
        )
    }
}