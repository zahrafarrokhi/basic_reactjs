import React,{ Component } from "react";

class Product2 extends Component {

  render() {   
    const list1 = ['item one', 'item two', 'item three'];
     const mappedList = list1.map(item => <li>item</li>);
      return (
        <div>        
          <span className='m-2 text-info'>product2 name</span>  
          <span className='m-2 badge bg-primary'>{ this.format()}</span>  
          <button className='m-2 btn btn-sm btn-success'>+</button>
          <button className='m-2 btn btn-sm btn-warning'>-</button>
          <button className='m-2 btn btn-sm btn-danger'>delete</button>
          <ul>
            {/* 1. */}
            {/* {list1}  */}
            {/* #out =>item oneitem twoitem three */}
          
            {/* 2. */}

            {/* {mappedList}  */}
            {/*
             # out => item
                      item
                      item  
            */}
            
                                    
            {/* 3. */}
            {/* {list1.map(item => <li>{item}</li>)} */}
            {/*
             out => item one
                    item two
                    item three 
            */}

            {/* 4. */}
            {/* key */}
            {list1.map((item,index) => <li key={index}>{item}</li>)} 
            
          </ul>
        </div>
      );
  }
  format() {
    return <a >Zero</a>;
   }
    
}

export default Product2;