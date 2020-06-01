import React, {useState} from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'

const Card = (props) => {
  const [quantity, setQuantity] = useState(1)

  const handleQuantity = (operation) => {
    if(operation === '-' && quantity === 1){
      alert('Item Removed')
      props.removeFromCart(props.info)
    }
    else if (operation === '-') {
      setQuantity(quantity-1)

      props.addToCart(props.info.ID, quantity)
    }
    else if(operation === '+'){
      setQuantity(quantity+1)
      props.addToCart(props.info.ID, quantity+1)
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
            <p>Description: {props.info.DESCRIPTION}</p>
            <div className = "displayInline">
              <p>Quantity: {quantity}</p>
              <p><Button variant="outline-danger" onClick = {() => handleQuantity('-') }>-</Button></p>
              <p><Button variant="outline-primary" onClick = {() => handleQuantity('+') }>+</Button></p>
            </div>
          </div>
        </div>
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
  addToCart: (id, quantity) => {
    return { ID: id, quantity: quantity, type: 'HANDLE_QUANTITY'}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
