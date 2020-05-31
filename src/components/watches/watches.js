import React from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

const SmartWatch = (props) => {

  return(
    <div className = "minHeight">
      <h2 className = "center m-tb50-30" >Smart Watches</h2>
      <div className = "section2">
        <div className = "flex">
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[30].IMAGE} alt = "Watches" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{props.products[30].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {props.products[30].PRICE}</p>
                    <p>Description: {props.products[30].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => props.addToCart(30)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[31].IMAGE} alt = "Watches" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{props.products[31].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {props.products[31].PRICE}</p>
                    <p>Description: {props.products[31].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => props.addToCart(31)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className = "center m-tb50-30" >Watches</h2>
      <div className = "section2">
        <div className = "flex">
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[32].IMAGE} alt = "Watches" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{props.products[32].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {props.products[32].PRICE}</p>
                    <p>Description: {props.products[32].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => props.addToCart(32)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[33].IMAGE} alt = "Watches" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{props.products[33].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {props.products[33].PRICE}</p>
                    <p>Description: {props.products[33].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => props.addToCart(33)}>Add to Cart</Button></p>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartWatch)
