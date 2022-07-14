// props
// import './Button.css';
// const Button = ({text}) => {
//   return (<button className='button'>{text }</button> );
// }
 
// export default Button;

// children
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  children, handleClick = () => {}, className, ...props
}) => (
  <button onClick={handleClick} className={`button ${className}`} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default Button;