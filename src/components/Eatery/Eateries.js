import React, { Component } from 'react';
import EateryList from './EateryList';

export default class Movies extends Component {

    constructor() {
        super();

        this.state = {
            eateries: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ eateries: .getEateries() }));
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <EateryList movies={this.state.eateries} />
                    </div>
                </div>
            </div>
        );
    }
}