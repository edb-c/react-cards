import React, { Component } from 'react';
import axios from 'axios';
import EateryList from './components/Eatery/EateryList'
import './App.css';

class App extends Component {
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
try {
await axios.get('https://data.cityofnewyork.us/resource/43nn-pn8j.json?$query=SELECT distinct dba, boro, grade, inspection_date')
.then(data => this.setState({ eateries: data.data })) 
}
catch (error) {
    throw new Error(error.message);
  }
}; //end getEateries

render() {
  const { eateries } = this.state;
  console.log(eateries)
  return (
    <div className="container-fluid" style={{marginLeft: '-15px'}}>
        <div className="d-flex flex-row">                    
          <div className="col-sm-12">
              <EateryList eateries={this.state.eateries} />
          </div>
        </div>
    </div>
    );//end return
    }//end render  
  };

export default App;

//<img src={logo} className='App-logo' alt='logo' />
