const Image = (props) => {
  const { imgSrc, customStyle } = props;
  return <img {...props} src={imgSrc} style={customStyle} />;
};

export default Image;
