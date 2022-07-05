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
      // clicked: false,
      clicked: 0,
      didMount: false,
      updateNumber:0,
    };
  }
  componentDidMount() {
    // this.setState({
    //   didMount:true,
    // });
    setTimeout(() => {
      this.setState({
        didMount: true,
      });
      //handleclick
      this.handleclick();
    }, 1000);
  }
  componentDidUpdate(prevProps,prevState) {
    const { updateNumber } = this.state;
    if (updateNumber===0) {
      this.setState({
        updateNumber: this.state.updateNumber + 1,
      });
    }
  }
  componentWillUnmount() {
    console.log('unmount')
  }
  handleclick = () => {
    //  console.log("click!")
    this.setState({
      // clicked: true,
      clicked: this.state.clicked + 1,
    });
  };

  render() {
    const { clicked, didMount,updateNumber } = this.state;
    return (
      <>
        {/* {this.state.clicked?"clicked":"not clicked"} */}
        <h1>Blog</h1>
        {/* <button onClick={() => console.log("click!")}>click!</button> */}
        <p>Clicked number :{clicked}</p>
        <button onClick={this.handleclick}>click!</button>
        <h1>Component Did mount </h1>
        <p>it is mounted?{didMount ? "YES" : "NO"}</p>
        <h1>Component Did Update </h1>
        <p>how many times updated?{updateNumber}</p>
      </>
    );
  }
}

export default Blog;
