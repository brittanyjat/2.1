import React, { Component } from 'react';
import './PropList.css';
import deleteIcon from '../delete_icon.png';
import axios from 'axios';

export default class PropList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            applyFilter: false,
            filterValue: 0
        };

        this.handleFilter = this.handleFilter.bind(this);
        this.filterValue = this.filterValue.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleDelete(propertyid) {
        axios.delete(`/api/properties/${propertyid}`).then(response => {
            this.props.history.history.go();
        })
    }

    handleFilter() {
        this.setState({
            applyFilter: true
        })
    }

    filterValue(value) {
        this.setState({
            filterValue: value
        });
    }

    reset(){
        this.setState({
            filterValue: 0
        })
    }

    render() {
        // console.log(this.props.properties)
        const properties = this.props.properties;
        const { filterValue, applyFilter } = this.state;

        const filteredProperties = properties.filter((function (x) { return (x.desired >= filterValue) }));

        const newProperties = applyFilter ? properties : filteredProperties;

        const propertyList = newProperties.map((home, i) => {
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
                        <span>Desired Rent: ${home.desired}</span>
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
                <div className='filter-container'>
                    <span className='font-20'>List properties with "desired rent" greater than: $</span>
                    <input
                        className='filter-input'
                        value={this.state.filterValue}
                        onChange={(e) => this.filterValue(e.target.value)} >
                    </input>

                    <button
                        className='filter-button filter'
                        onClick={(e) => this.handleFilter()}>
                        Filter
                        </button>

                    <button
                        className='filter-button white-text reset'
                        onClick={(e) => this.reset()}>
                        Reset
                        </button>
                    <hr />
                </div>
                <div>
                    <h1>Home Listings</h1>
                    {propertyList}
                </div>
            </div>
        )
    }
}