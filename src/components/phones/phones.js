import React from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

const Phone = (props) => {

  return(
    <div className = "minHeight">
      <h2 className = "center m-tb50-30" >Keyboards</h2>
      <div className = "section3">
        <div className = "flex">
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[17].IMAGE} alt = "Phones" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{props.products[17].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {props.products[17].PRICE}</p>
                    <p>Description: {props.products[17].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => props.addToCart(17)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[18].IMAGE} alt = "Phones" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{props.products[18].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {props.products[18].PRICE}</p>
                    <p>Description: {props.products[18].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => props.addToCart(18)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[19].IMAGE} alt = "Phones" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{props.products[19].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {props.products[19].PRICE}</p>
                    <p>Description: {props.products[19].PRICE}</p>
                    <p><Button variant="outline-light" onClick = {() => props.addToCart(19)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className = "center m-tb50-30" >Mouse</h2>
      <div className = "section3">
        <div className = "flex">
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[20].IMAGE} alt = "Phones" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{props.products[20].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {props.products[20].PRICE}</p>
                    <p>Description: {props.products[20].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => props.addToCart(20)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[21].IMAGE} alt = "Phones" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{props.products[21].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {props.products[21].PRICE}</p>
                    <p>Description: {props.products[21].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => props.addToCart(21)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {props.products[22].IMAGE} alt = "Phones" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{props.products[22].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {props.products[22].PRICE}</p>
                    <p>Description: {props.products[22].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => props.addToCart(22)}>Add to Cart</Button></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Phone)
