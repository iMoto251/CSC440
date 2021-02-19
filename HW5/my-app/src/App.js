import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './FilterableProductTable';


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football', quantity: 15},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball', quantity: 6},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball', quantity: 3},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch', quantity: 7},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5', quantity: 13},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7', quantity: 12}
];


function App(props) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Today</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
	<div><FilterableProductTable products={PRODUCTS} /></div>
      </div>
    );
}

export default App;
