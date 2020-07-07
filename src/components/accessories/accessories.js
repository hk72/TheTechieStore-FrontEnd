import React from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

const Accessories = (props) => {

  return(
    <div className = "minHeight">
      <h2 className = "center m-tb50-30" >Keyboards</h2>
      <div className = "section3">
        <div className = "flex">
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[11].IMAGE} alt = "Accessories" className = "w-100"/>
                <div className = "details">
                  <div className = "contents">
                    <p style = {{fontSize: "125%"}}>{props.products[11].NAME}</p>
                    <hr style = {{marginTop: "0rem", borderTop: "1px solid white"}}></hr>
                    <p>Cost: {props.products[11].PRICE}</p>
                    <p>Description: {props.products[11].DESCRIPTION}</p>
                    <p><Button variant="outline-light shadow-none" onClick = {() =>{
                      props.updateQuantities(11, 1)
                      props.addToCart(11)
                    }}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[12].IMAGE} alt = "Accessories" className = "w-100"/>
                <div className = "details">
                  <div className = "contents">
                    <p style = {{fontSize: "125%"}}>{props.products[12].NAME}</p>
                    <hr style = {{marginTop: "0rem", borderTop: "1px solid white"}}></hr>
                    <p>Cost: {props.products[12].PRICE}</p>
                    <p>Description: {props.products[12].DESCRIPTION}</p>
                    <p><Button variant="outline-light shadow-none" onClick = {() =>{
                      props.updateQuantities(12, 1)
                      props.addToCart(12)
                    }}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[13].IMAGE} alt = "Accessories" className = "w-100"/>
                <div className = "details">
                  <div className = "contents">
                    <p style = {{fontSize: "125%"}}>{props.products[13].NAME}</p>
                    <hr style = {{marginTop: "0rem", borderTop: "1px solid white"}}></hr>
                    <p>Cost: {props.products[13].PRICE}</p>
                    <p>Description: {props.products[13].DESCRIPTION}</p>
                    <p><Button variant="outline-light shadow-none" onClick = {() =>{
                      props.updateQuantities(13, 1)
                      props.addToCart(13)
                    }}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className = "center m-tb50-30" >Mouse</h2>
      <div style = {{paddingBottom: "50px"}} className = "section3">
        <div className = "flex">
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[14].IMAGE} alt = "Accessories" className = "w-100"/>
                <div className = "details">
                  <div className = "contents">
                    <p style = {{fontSize: "125%"}}>{props.products[14].NAME}</p>
                    <hr style = {{marginTop: "0rem", borderTop: "1px solid white"}}></hr>
                    <p>Cost: {props.products[14].PRICE}</p>
                    <p>Description: {props.products[14].DESCRIPTION}</p>
                    <p><Button variant="outline-light shadow-none" onClick = {() =>{
                      props.updateQuantities(14, 1)
                      props.addToCart(14)
                    }}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[15].IMAGE} alt = "Accessories" className = "w-100"/>
                <div className = "details">
                  <div className = "contents">
                    <p style = {{fontSize: "125%"}}>{props.products[15].NAME}</p>
                    <hr style = {{marginTop: "0rem", borderTop: "1px solid white"}}></hr>
                    <p>Cost: {props.products[15].PRICE}</p>
                    <p>Description: {props.products[15].DESCRIPTION}</p>
                    <p><Button variant="outline-light shadow-none" onClick = {() =>{
                      props.updateQuantities(15, 1)
                      props.addToCart(15)
                    }}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[16].IMAGE} alt = "Accessories" className = "w-100"/>
                <div className = "details">
                  <div className = "contents">
                    <p style = {{fontSize: "125%"}}>{props.products[16].NAME}</p>
                    <hr style = {{marginTop: "0rem", borderTop: "1px solid white"}}></hr>
                    <p>Cost: {props.products[16].PRICE}</p>
                    <p>Description: {props.products[16].DESCRIPTION}</p>
                    <p><Button variant="outline-light shadow-none" onClick = {() =>{
                      props.updateQuantities(16, 1)
                      props.addToCart(16)
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

export default connect(mapStateToProps, mapDispatchToProps)(Accessories)
