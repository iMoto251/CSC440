import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './FilterableProductTable';
import styled from 'styled-components';

const AppStyled = styled.div`
  text-align: center;
`;


//add appropriate css properties and values here to center the content horizontally
//Do not use margin border or padding
const Wrapper = styled.div`
display: grid;
justify-items: center;
`;


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

//      <div className="App">
//</div>


class App extends Component {
  render() {
    return (
      <AppStyled>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Today</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
	    <Wrapper><FilterableProductTable products={PRODUCTS} /></Wrapper>
      </AppStyled>
    );
  }
}

export default App;
