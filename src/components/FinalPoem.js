import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const finalPoem = () => {
    if (props.isSubmitted) {
      return (
        <section className="FinalPoem__poem"> 
          <h3>Final Poem</h3>
            {props.submissions.map((poem, i) => (
            <p key={i}>
            {poem};
            </p>
          ))}
        </section>
      )
    } else {
      return (
        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.revealPoem} />
        </div>)
    }
    }
  
  return (
    <div className="FinalPoem">
      {finalPoem()}
    </div>
  )};

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
