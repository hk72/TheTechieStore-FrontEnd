import React from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

const Tablet = (props) => {

  return(
    <div className = "minHeight">
      <h2 className = "center m-tb50-30" >Apple</h2>
      <div style = {{paddingBottom: "50px"}} className = "section2">
        <div className = "flex">
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[23].IMAGE} alt = "Tablets" className = "w-100"/>
                <div className = "details">
                  <div className = "contents">
                    <p style = {{fontSize: "125%"}}>{props.products[23].NAME}</p>
                    <hr style = {{marginTop: "0rem", borderTop: "1px solid white"}}></hr>
                    <p>Cost: {props.products[23].PRICE}</p>
                    <p>Description: {props.products[23].DESCRIPTION}</p>
                    <p><Button variant="outline-light shadow-none" onClick = {() =>{
                      props.updateQuantities(23, 1)
                      props.addToCart(23)
                    }}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[24].IMAGE} alt = "Tablets" className = "w-100"/>
                <div className = "details">
                  <div className = "contents">
                    <p style = {{fontSize: "125%"}}>{props.products[24].NAME}</p>
                    <hr style = {{marginTop: "0rem", borderTop: "1px solid white"}}></hr>
                    <p>Cost: {props.products[24].PRICE}</p>
                    <p>Description: {props.products[24].DESCRIPTION}</p>
                    <p><Button variant="outline-light shadow-none" onClick = {() =>{
                      props.updateQuantities(24, 1)
                      props.addToCart(24)
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

export default connect(mapStateToProps, mapDispatchToProps)(Tablet)
