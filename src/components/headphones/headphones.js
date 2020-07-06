import React from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

const Headphone = (props) => {

  return(
    <div className = "minHeight">
      <h2 className = "center m-tb50-30" >Over Ear</h2>
      <div className = "section3">
        <div className = "flex">
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[25].IMAGE} alt = "Headphones" className = "w-100"/>
                <div className = "details">
                  <div className = "contents">
                    <p style = {{fontSize: "125%"}}>{props.products[25].NAME}</p>
                    <hr style = {{marginTop: "0rem", borderTop: "1px solid white"}}></hr>
                    <p>Cost: {props.products[25].PRICE}</p>
                    <p>Description: {props.products[25].DESCRIPTION}</p>
                    <p><Button variant="outline-light shadow-none" onClick = {() =>{
                      props.updateQuantities(25, 1)
                      props.addToCart(25)
                    }}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[26].IMAGE} alt = "Headphones" className = "w-100"/>
                <div className = "details">
                  <div className = "contents">
                    <p style = {{fontSize: "125%"}}>{props.products[26].NAME}</p>
                    <hr style = {{marginTop: "0rem", borderTop: "1px solid white"}}></hr>
                    <p>Cost: {props.products[26].PRICE}</p>
                    <p>Description: {props.products[26].DESCRIPTION}</p>
                    <p><Button variant="outline-light shadow-none" onClick = {() =>{
                      props.updateQuantities(26, 1)
                      props.addToCart(26)
                    }}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[27].IMAGE} alt = "Headphones" className = "w-100"/>
                <div className = "details">
                  <div className = "contents">
                    <p style = {{fontSize: "125%"}}>{props.products[27].NAME}</p>
                    <hr style = {{marginTop: "0rem", borderTop: "1px solid white"}}></hr>
                    <p>Cost: {props.products[27].PRICE}</p>
                    <p>Description: {props.products[27].DESCRIPTION}</p>
                    <p><Button variant="outline-light shadow-none" onClick = {() =>{
                      props.updateQuantities(27, 1)
                      props.addToCart(27)
                    }}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <h2 className = "center m-tb50-30" >In Ear</h2>
    <div style = {{paddingBottom: "50px"}} className = "section2">
      <div className = "flex">
        <div className = "f2">
          <div className = "card2 minImageHeight">
            <div className = "imageExpand rounded">
              <img src = {props.products[28].IMAGE} alt = "Headphones" className = "w-100"/>
              <div className = "details">
                <div className = "contents">
                  <p style = {{fontSize: "125%"}}>{props.products[28].NAME}</p>
                  <hr style = {{marginTop: "0rem", borderTop: "1px solid white"}}></hr>
                  <p>Cost: {props.products[28].PRICE}</p>
                  <p>Description: {props.products[28].DESCRIPTION}</p>
                  <p><Button variant="outline-light shadow-none" onClick = {() =>{
                    props.updateQuantities(28, 1)
                    props.addToCart(28)
                  }}>Add to Cart</Button></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className = "f2">
          <div className = "card2 minImageHeight">
            <div className = "imageExpand rounded">
              <img src = {props.products[29].IMAGE} alt = "Headphones" className = "w-100"/>
              <div className = "details">
                <div className = "contents">
                  <p style = {{fontSize: "125%"}}>{props.products[29].NAME}</p>
                  <hr style = {{marginTop: "0rem", borderTop: "1px solid white"}}></hr>
                  <p>Cost: {props.products[29].PRICE}</p>
                  <p>Description: {props.products[29].DESCRIPTION}</p>
                  <p><Button variant="outline-light shadow-none" onClick = {() =>{
                    props.updateQuantities(29, 1)
                    props.addToCart(29)
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

export default connect(mapStateToProps, mapDispatchToProps)(Headphone)
