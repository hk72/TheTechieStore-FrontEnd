import React from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

const SmartHome = (props) => {

  return(
    <div className = "minHeight">
      <h2 className = "center m-tb50-30" >Google</h2>
      <div className = "section2">
        <div className = "flex">
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[34].IMAGE} alt = "Smart Home" className = "w-100"/>
                <div className = "details">
                  <div className = "contents">
                    <p style = {{fontSize: "125%"}}>{props.products[34].NAME}</p>
                    <hr style = {{marginTop: "0rem", borderTop: "1px solid white"}}></hr>
                    <p>Cost: {props.products[34].PRICE}</p>
                    <p>Description: {props.products[34].DESCRIPTION}</p>
                    <p><Button variant="outline-light shadow-none" onClick = {() =>{
                      props.updateQuantities(34, 1)
                      props.addToCart(34)
                    }}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[35].IMAGE} alt = "Smart Home" className = "w-100"/>
                <div className = "details">
                  <div className = "contents">
                    <p style = {{fontSize: "125%"}}>{props.products[35].NAME}</p>
                    <hr style = {{marginTop: "0rem", borderTop: "1px solid white"}}></hr>
                    <p>Cost: {props.products[35].PRICE}</p>
                    <p>Description: {props.products[35].DESCRIPTION}</p>
                    <p><Button variant="outline-light shadow-none" onClick = {() =>{
                      props.updateQuantities(35, 1)
                      props.addToCart(35)
                    }}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className = "center m-tb50-30" >Apple</h2>
      <div className = "section1">
        <div className = "flex">
          <div className = "f1">
            <div className = "card1 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[36].IMAGE} alt = "Smart Home" className = "w-100"/>
                <div className = "details">
                  <div className = "contents">
                    <p style = {{fontSize: "125%"}}>{props.products[36].NAME}</p>
                    <hr style = {{marginTop: "0rem", borderTop: "1px solid white"}}></hr>
                    <p>Cost: {props.products[36].PRICE}</p>
                    <p>Description: {props.products[36].DESCRIPTION}</p>
                    <p><Button variant="outline-light shadow-none" onClick = {() =>{
                      props.updateQuantities(36, 1)
                      props.addToCart(36)
                    }}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className = "center m-tb50-30" >Amazon</h2>
      <div style = {{paddingBottom: "50px"}} className = "section2">
        <div className = "flex">
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[37].IMAGE} alt = "Smart Home" className = "w-100"/>
                <div className = "details">
                  <div className = "contents">
                    <p style = {{fontSize: "125%"}}>{props.products[37].NAME}</p>
                    <hr style = {{marginTop: "0rem", borderTop: "1px solid white"}}></hr>
                    <p>Cost: {props.products[37].PRICE}</p>
                    <p>Description: {props.products[37].DESCRIPTION}</p>
                    <p><Button variant="outline-light shadow-none" onClick = {() =>{
                      props.updateQuantities(37, 1)
                      props.addToCart(37)
                    }}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[38].IMAGE} alt = "Smart Home" className = "w-100"/>
                <div className = "details">
                  <div className = "contents">
                    <p style = {{fontSize: "125%"}}>{props.products[38].NAME}</p>
                    <hr style = {{marginTop: "0rem", borderTop: "1px solid white"}}></hr>
                    <p>Cost: {props.products[38].PRICE}</p>
                    <p>Description: {props.products[38].DESCRIPTION}</p>
                    <p><Button variant="outline-light shadow-none" onClick = {() =>{
                      props.updateQuantities(38, 1)
                      props.addToCart(38)
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

export default connect(mapStateToProps, mapDispatchToProps)(SmartHome)
