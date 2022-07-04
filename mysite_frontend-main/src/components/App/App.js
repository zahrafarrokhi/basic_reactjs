import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Products from '../Products/Products';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Layout from '../Layout/Layout';


function App() {
  return (
    <div className="App">
    
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Products />
              </Route>
              <Route path="/about">
                <About />
              </Route>
             
              <Route path="/contact">
                <Contact />
              </Route>
             
            </Switch>
          </Layout>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
