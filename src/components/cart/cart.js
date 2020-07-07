import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import history from '../../history'
import Button from 'react-bootstrap/Button'
import Card from './card'

const Cart = (props) => {

  useEffect(() =>{
    fetch('https://thetechiestore.herokuapp.com/api/product/cart',{
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
    .catch(err => {
      alert('An Error Has Occured. Please Try Again.')
    })
  })

  const handleCheckout = () => {
    fetch('http://localhost:5000/api/user/checkout',{
      method: 'PATCH',
      credentials: 'include',
      headers:{
          'Content-Type':'application/json'
      }
      })
      .then(res => res.json())
      .then(res => {
        if(res.message === "Auth Failed"){
          history.push('/login')
        }
        else if(res.message === "Internal Server Error"){
          alert('Something went Wrong. Please Try Again')
        }
        else if(res.message === "Checked Out"){
          alert('Checkout Success')
          props.clearCart()
        }
    })
  }

  return(
    <div className = "minHeight">
      {props.cart[0] === null
        ?
          <div>
            <h2 className = "center m-tb50-30">Cart Empty</h2>
          </div>
        :
        <div>
          <h2 className = "center m-tb50-30" >Cart</h2>
          <div >
            {props.cart.map(info => <Card  key = {info.ID} info = {info} quantity = {props.quantity[info.ID]}/>)}
          </div>
          <div className = "center displayInline">
            <p><Button variant="outline-success shadow-none" onClick = {() =>handleCheckout()}>Checkout</Button></p>
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
  },
  clearCart: () => {
    return { type: 'CLEAR_CART',}
  },
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
