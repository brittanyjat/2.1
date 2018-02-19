import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropList from './PropList';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            properties: [],
            test: [{
                address: '1234 Dev Way',
                city: 'Provo',
                description: 'my very own home',
                desired: '100.00',
                imgurl: 'https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15',
                loan: '100000.00',
                monthly: '999.00',
                name: 'tiny house',
                state: 'OR',
                zip: '81243'
            }],
            applyFilter: false,
            filterValue: 0
        };
        this.handleFilter = this.handleFilter.bind(this);
        this.filterValue = this.filterValue.bind(this);
        this.reset = this.reset.bind(this);
    }


    componentDidMount() {
        axios.get('/api/properties').then(response => {
            this.setState({
                properties: response.data
            });
        });
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

    reset() {
        this.setState({
            filterValue: 0
        })
    }

    render() {
        const { properties, applyFilter, filterValue } = this.state;

        const filteredProperties = properties.filter((function (x) { return (x.desired >= filterValue) }));

        return (
            <div id='dashboard-main'>
                <div><Header /></div>

                <div className='dashboard-container'>

                    <Link to='/wizard/1'><button className='add-new-button font-20 bold'>Add new property</button></Link>


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


                    <PropList properties={applyFilter ? filteredProperties : properties} history={this.props} />

                </div>
            </div>
        )
    }
}