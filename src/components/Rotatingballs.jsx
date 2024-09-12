import React from 'react';
import './RotatingBalls.css'; // Import your CSS file

const RotatingBalls = () => {
  return (
    <div className="rotating-container">
      <div className="ball">
        <i className="icon fa fa-react"></i>
      </div>
      <div className="ball">
        <i className="icon fa fa-python"></i>
      </div>
      <div className="ball">
        <i className="icon fa fa-coffee"></i>
      </div>
      <div className="ball">
        <i className="icon fa fa-coffee"></i>
      </div>
    </div>
  );
};

export default RotatingBalls;
