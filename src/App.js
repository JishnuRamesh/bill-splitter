import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



import Nav from './Nav';
import ProductForm from './ProductForm';



class App extends Component {
  render() {
    return (

      <div>
      <Nav />

      <ProductForm />


      </div>

    );
  }
}

export default App;
