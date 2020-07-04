import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Card from './card'

const Cart = (props) => {

  useEffect(() =>{
    fetch('http://localhost:5000/api/product/cart',{
      method: 'POST',
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify({'localStorage': localStorage.shopping_cart})
      })
      .then(res => res.json())
      .then(payload => {
        props.getCart(payload.objects)
    })
  },[])

  return(
    <div className = "minHeight">
      {props.cart[0] === null
        ?
          <div style = {{paddingTop: "100px"}}>
            <h2>Cart Empty</h2>
          </div>
        :
        <div>
          <h2 className = "center m-tb50-30" >Cart</h2>
          <div >
            {props.cart.map(info => <Card  key = {info.ID} info = {info} quantity = {props.quantity[info.ID]}/>)}
          </div>
          <div className = "center displayInline">
            <p><Button variant="outline-success shadow-none">Checkout</Button></p>
          </div>
        </div>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
  quantity: state.quantity
})

const mapDispatchToProps = {
  getCart: data => {
    return { payload: data, type: 'GET_CART',}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
