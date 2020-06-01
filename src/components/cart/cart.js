import React, { useEffect } from 'react'
import { connect } from 'react-redux'
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
      {props.cart === null
        ?
          <div>
          <h2> x</h2>
          </div>
        :
        <div>
          <h2 className = "center m-tb50-30" >Cart</h2>
          <div >
            {props.cart.map(info => <Card  key = {info.ID} info = {info}/>)}
          </div>
        </div>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = {
  getCart: data => {
    return { payload: data, type: 'GET_CART',}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
