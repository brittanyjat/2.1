import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
            properties: []
        };
    }

    componentDidMount(){
        axios.get('/api/properties').then(response => {
            // console.log(response);
            this.setState({
                properties: response.data
            });
        });
    }


    render() {
        // console.log(this.props.currentUser)
        // console.log(this.state);
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
                    </div>
                </div>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {})(Dashboard);