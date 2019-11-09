import React, { Component } from 'react';
import axios from 'axios';
import EateryList from './components/Eatery/EateryList'
import './App.css';
import Pagination from './components/Pagination';

class App extends Component {
  constructor() {
    super();
    this.state = {
        eateries: [],
        currentPage: 1,
        eateriesPerPage: 10     
    }; //end state
    } //end constructor

componentDidMount() {
    getEateries();
    this.setState = ({
        // Change page
        paginate: this.state.currentPage,
        indexOfLastEatery: this.state.currentPage * this.state.eateriesPerPage,
        indexOfFirstEatery: this.state.indexOfLastEatery - this.state.eateriesPerPage,
        currentEateries: this.state.eateries.slice(this.state.indexOfFirstEatery, this.state.indexOfLastEatery)
    });//end setState
} //end DidMount

//setState({ eateries, currentPage, eateriesPerPage 
//indexOfLastEatery = currentPage * eateriesPerPage
//indexOfFirstEatery = indexOfLastEatery - eateriesPerPage
//currentEateries = eateries.slice(indexOfFirstEatery, indexOfLastEatery)
// Change page
//const paginate = pageNumber => setCurrentPage(pageNumber);

getEateries = async () => {
try {
await axios.get('https://data.cityofnewyork.us/resource/43nn-pn8j.json?$query=SELECT distinct dba, boro, grade, inspection_date LIMIT 500')
.then(data => this.state({ eateries: data.data })) 
}
catch (error) {
    throw new Error(error.message);
  }
}; //end getEateries

render() {
    return (
    <div className="container-fluid" style={{marginLeft: '-15px'}}>
        <div className="d-flex flex-row">                    
          <div className="col-sm-12">
              <EateryList eateries={this.state.currentEateries} />
              <Pagination
                eateriesPerPage={this.state.eateriesPerPage}
                totalEateries={this.state.eateries.length}
                paginate={this.state.paginate}
               />              
          </div>
        </div>
    </div>
    );//end return
    }//end render  
  };

export default App;

//<img src={logo} className='App-logo' alt='logo' />
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