const Image = (props) => {
  const { imgSrc, style } = props;
  return ( 
    <img {...props} src={imgSrc } style={style}/>
   );
}
 
export default Image;