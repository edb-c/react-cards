import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import 'moment-timezone';

const EateryCard = ( props ) => {

    return (
   
      <div className="eatery-card">
        <div className="eatery-card card">
            <div className="card-body">
              <h5>{props.eatery.dba}</h5>
              <p>{props.eatery.boro} <br/>
              Inspection Date: <Moment format="YYYY/MM/DD">{props.eatery.inspection_date}</Moment> <br/>
              Grade: {props.eatery.grade}
              </p>
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