import React, { Component } from "react";

class Product7 extends Component {
  // count = 5;
  // state = {
  //    // productName:'laptop'
  //   // count: 0,
  //  count :this.props.count,
   
  // }

  render() { 
    // props
    const { productName } = this.props;
      return (
        <div>    
          {/* props */}
          {/* <span className='m-2 text-info'>{this.props.productName}</span>       */}
          {/* props */}
          <span className='m-2 text-info'>{productName}</span>        
          <span className='m-2 badge bg-primary'>{ this.format()}</span>
          <button onClick={this.handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
          <button onClick={this.handleDecrement} className='m-2 btn btn-sm btn-warning'>-</button>
          {/* <button onClick={() => this.handleDelete(55)} className='m-2 btn btn-sm btn-danger'>delete</button> */}
          <button onClick={this.handleDelete} className='m-2 btn btn-sm btn-danger'>delete</button>

        </div>
      );
  }
  handleIncrement = () => {
    // const count = this.state.count;
    const { count } = this.state;
    // this.setState({ count: this.state.count + 1 })
    this.setState({count: count + 1})

    console.log(this.state);
  }

  handleDecrement = () => {
    // console.log('decrement');
    const { count } = this.state;
    this.setState({count: count - 1})
  }
  // handleDelete = (itemNumber) => {
  //   // console.log(itemNumber);    
    
  // }
  handleDelete =()=>{
    this.props.onDelete(this.props.id);
  }
 
  
  // format(){
  //   if (this.state.count === 0) {
  //     return 'zero';
  //   } else {
  //     return this.state.count;
  //   }
  // }
  format(){
    if(this.props.count === 0){
      return '0';
    }else{
      return this.props.count;
    }
  }
 
}

export default Product7;