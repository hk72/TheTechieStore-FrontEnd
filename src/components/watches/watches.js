import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'

const SmartWatch = (props) => {

  const [watch, setWatch] = useState({"30":{}, "31":{}, "32":{}, "33":{}})

  useEffect(() => {
    fetch("http://localhost:5000/api/product")
    .then(res => res.json())
    .then(res => setWatch(res.products))
  },[])

  const addToCart = (item) => {
    localStorage.shopping_cart = localStorage.shopping_cart + item
  }

  return(
    <div className = "minHeight">
      <h2 className = "center m-tb50-30" >Smart Watches</h2>
      <div className = "section2">
        <div className = "flex">
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {watch[30].IMAGE} alt = "Watches" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{watch[30].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {watch[30].PRICE}</p>
                    <p>Description: {watch[30].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(30)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {watch[31].IMAGE} alt = "Watches" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{watch[31].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {watch[31].PRICE}</p>
                    <p>Description: {watch[31].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(31)}>Add to Cart</Button></p>
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
                <img src = {watch[32].IMAGE} alt = "Watches" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{watch[32].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {watch[32].PRICE}</p>
                    <p>Description: {watch[32].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(32)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {watch[33].IMAGE} alt = "Watches" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{watch[33].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {watch[33].PRICE}</p>
                    <p>Description: {watch[33].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(33)}>Add to Cart</Button></p>
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

export default SmartWatch
