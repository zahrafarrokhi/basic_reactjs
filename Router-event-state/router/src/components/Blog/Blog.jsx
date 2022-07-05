import React from "react";
// import Button from "../Button/Button";
import "./Blog.css";

// const Blog = () => {

//   return (
//     <div className="Blog">

//    <ul>blog</ul>
//     </div>
//   );
// };
// 

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  handleclick = () => {
  //  console.log("click!")
    this.setState({
      clicked: true,
     
    });
   
  };

  render() {
    return (
      <>
        {this.state.clicked?"clicked":"not clicked"}
        <h1>Blog</h1>
        {/* <button onClick={() => console.log("click!")}>click!</button> */}
        <button onClick={this.handleclick}>click!</button>
      </>
    );
  }
}

export default Blog;
