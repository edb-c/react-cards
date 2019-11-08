import React from 'react';
import PropTypes from 'prop-types';

const EateryCard = ( props ) => {

    return (
   
      <div className="eatery-card">
        <div className="eatery-card card">
            <div className="card-body">
              <h2>{props.eatery.dba}</h2>
            </div>
        </div>
      </div>

  );
};

EateryCard.defaultProps = {
    eatery: {}
};

EateryCard.propTypes = {
    eatery: PropTypes.object
};
export default EateryCard;