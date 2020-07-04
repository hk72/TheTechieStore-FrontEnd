import React, {useState} from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'

const Card = (props) => {

  const handleQuantity = (operation) => {
    if(operation === '-' && props.quantity === 1){
      alert('Item Removed')
      props.removeFromCart(props.info)
      props.updateQuantities(props.info.ID, 0)
    }
    else if (operation === '-') {
      props.updateQuantities(props.info.ID, props.quantity-1)
    }
    else if(operation === '+'){
      props.updateQuantities(props.info.ID, props.quantity+1)
    }
  }

  return(
    <div className = "section2">
      <div className = "cartCard flex">
        <div className = "f25 maxWidth33">
          <img src = "tabletCover.jpg" alt = "as"/>
        </div>
        <div className = "f75">
          <div className = "maxDescriptionHeight">
            <p>Price: {props.info.NAME}</p>
            <p>Price: {props.info.PRICE}</p>
            <div className = "overflowYAuto">
              <p>Description: {props.info.DESCRIPTION}</p>
            </div>
            <p>Quantity: {props.quantity}</p>
            <div className = "displayInline">
              <p><Button variant="outline-danger shadow-none" onClick = {() => handleQuantity('-') }>-</Button></p>
              <p><Button variant="outline-primary shadow-none" onClick = {() => handleQuantity('+') }>+</Button></p>
            </div>
          </div>
        </div>
      </div>
      <div className = "spacing25">
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = {
  removeFromCart: data => {
    return { payload: data, type: 'REMOVE_FROM_CART'}
  },
  updateQuantities: (id, quantity) => {
    return { id: id, quantity: quantity, type: 'UPDATE_QUANTITY'}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
