/*
import React from 'react';
import EateryCard from './EateryCard.js';

const EateryList = ({ eateries }) => {

    return (
        <div className="card-group">
            {
                eateries.length === 0 ? (
                    <div>Loading...</div>
                    ) : (
                eateries.map((eatery,index) => (
                   
                    <EateryCard 
                        key={index}
                        dba={eateries[index].dba}
                        boro={eateries[index].boro}
                    />
                    )
                )
            }
        </div>
    )
} //end function

export default EateryList;
*/
import React from 'react';
import PropTypes from 'prop-types';
import EateryCard from './EateryCard.js';
import Pagination from './Pagination';

const getEateries = eateries => {
	return (
		<div className='card-deck'>
			{eateries.map((eatery, index) => (
				<EateryCard key={index} eatery={eatery} />
			))}
		</div>
	);
};

const EateryList = props => <div>{getEateries(props.eateries)}</div>;

EateryList.defaultProps = {
	eateries: []
};

EateryList.propTypes = {
	eateries: PropTypes.array
};

export default EateryList;
