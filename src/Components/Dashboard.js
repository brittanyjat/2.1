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
                address:'1234 Dev Way',
                city: 'Provo',
                description: 'my very own home',
                desired: '100.00',
                imgurl: 'https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15',
                loan: '100000.00',
                monthly: '999.00',
                name: 'tiny house',
                state: 'OR',
                zip: '81243'
            }]
        };
    }


    componentDidMount() {
        axios.get('/api/properties').then(response => {
            // console.log(response);
            this.setState({
                properties: response.data
            });
        });
    }


    render() {


        return (
            <div id='dashboard-main'>
                <div><Header /></div>
                <div className='dashboard-container'>
                    <Link to='/wizard/1'><button className='add-new-button font-20 bold'>Add new property</button></Link>
                    <div className='filter-container'>
                        <span className='font-20'>List properties with "desired rent" greater than: $</span>
                        <input
                            className='filter-input'
                            placeholder='0'>
                        </input>
                        <button className='filter-button filter'>Filter</button>
                        <button className='filter-button white-text reset'>Reset</button>
                        <hr />
                        <PropList properties={this.state.properties} history={this.props}/>
                    </div>
                </div>
            </div>
        )
    }
}