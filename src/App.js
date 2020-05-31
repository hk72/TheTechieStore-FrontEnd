import React, {useEffect} from 'react';
import './App.css';
import { Router } from 'react-router-dom'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import history from './history'
import Carousel from './components/carousel/carousel'
import Browse from './components/browse/browse'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import Laptop from './components/laptop/laptop'
import Computer from './components/computers/computers'
import Accessories from './components/accessories/accessories'
import Headphone from './components/headphones/headphones'
import Phone from './components/phones/phones'
import SmartHome from './components/smartHomes/smartHomes'
import Watch from './components/watches/watches'
import Tablet from './components/tablets/tablets'
import Cart from './components/cart/cart'
import Account from './components/account/account'


const App = (props) => {

  useEffect(() => {
    fetch("http://localhost:5000/api/product")
    .then(res => res.json())
    .then(res => props.getProducts(res.products))
  },[])

  return (
    <div>
      <Navbar/>
      <Router history = {history} >
        <Route exact path = '/' render = {props =>
          <div>
            <Carousel/>
            <Browse/>
          </div>
        }/>
        <Route exact path = '/laptops' component = {Laptop}/>
        <Route exact path = '/computers' component = {Computer}/>
        <Route exact path = '/accessories' component = {Accessories}/>
        <Route exact path = '/headphones' component = {Headphone}/>
        <Route exact path = '/phones' component = {Phone}/>
        <Route exact path = '/smartHomes' component = {SmartHome}/>
        <Route exact path = '/watches' component = {Watch}/>
        <Route exact path = '/tablets' component = {Tablet}/>
        <Route exact path = '/cart' component = {Cart}/>
        <Route exact path = '/account' component = {Account}/>
      </Router>
      <Footer/>
    </div>
  );
}

const mapDispatchToProps = {
  getProducts: data => {
    return { payload: data, type: 'GET_PRODUCTS',}
  }
}

export default connect(null, mapDispatchToProps)(App);
