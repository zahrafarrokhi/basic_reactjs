// props
// import './Button.css';
// const Button = ({text}) => {
//   return (<button className='button'>{text }</button> );
// }
 
// export default Button;

// children
import './Button.css';
const Button = ({children,handleClick = () => {}}) => {
  return (<button onClick={ handleClick} className='button'>{children }</button> );
}
 
export default Button;