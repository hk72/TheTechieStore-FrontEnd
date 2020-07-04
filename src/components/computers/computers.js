import React from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

const Computer = (props) => {

  return(
    <div className = "minHeight">
      <h2 className = "center m-tb50-30" >Apple</h2>
      <div className = "section2">
        <div className = "flex">
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[9].IMAGE} alt = "Computer" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{props.products[9].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {props.products[9].PRICE}</p>
                    <p>Description: {props.products[9].DESCRIPTION}</p>
                    <p><Button variant="outline-light shadow-none" onClick = {() =>{
                      props.updateQuantities(9, 1)
                      props.addToCart(9)
                    }}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[10].IMAGE} alt = "Computer" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{props.products[10].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {props.products[10].PRICE}</p>
                    <p>Description: {props.products[10].DESCRIPTION}</p>
                    <p><Button variant="outline-light shadow-none" onClick = {() =>{
                      props.updateQuantities(10, 1)
                      props.addToCart(10)
                    }}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = {
  addToCart: data => {
    return { payload: data, type: 'ADD_TO_CART',}
  },
  updateQuantities: (id, quantity) => {
    return { id: id, quantity: quantity, type: 'UPDATE_QUANTITY'}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Computer)
