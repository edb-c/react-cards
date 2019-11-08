import React, { Component } from 'react';
import axios from 'axios';

class EateryList extends Component { 
    constructor() {
        super();
        this.state = {
            eateries: []
        };
    } //end constructor

    componentDidMount() {
        this.getEateries();
    } //end DidMount
/*
getEateries = () => {
    axios
  .get('https://data.cityofnewyork.us/resource/43nn-pn8j.json?$query=SELECT distinct dba, boro, grade, inspection_date')
        .then(data => this.setState({ eateries: data.data }))
        .catch(err => {
            console.log(err);
            return null;
        });
}; //end getEateries

render() {
    return (
        <div>
            {this.state.eateries.length === 0 ? (
                <div>Loading...</div>
            ) : (
                this.state.eateries.map((eatery, index) => {
        return <div 
        key={index}>{eatery.dba}, {eatery.boro},  {eatery.grade} ,{eatery.inspection_date}               </div>;
                })
            )}
        </div>
    );
} //end render
} //end function
*/


getEateries = async () => {
    await axios.get('https://data.cityofnewyork.us/resource/43nn-pn8j.json?$query=SELECT distinct dba, boro, grade, inspection_date')
    .then(data => this.setState({ eateries: data.data }))  
    }; //end getEateries

render() {
    return (
        <div>
            {this.state.eateries.length === 0 ? (
                <div>Loading...</div>
            ) : (
                this.state.eateries.map((eatery, index) => {
        return <div 
        key={index}>{eatery.dba}, {eatery.boro},  {eatery.grade} ,{eatery.inspection_date}               </div>;
                })
            )}

        </div>
    );
} //end render
}; //end function

export default EateryList;