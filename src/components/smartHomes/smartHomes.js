import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'

const SmartHome = (props) => {

  const [smartHome, setSmartHome] = useState({"34":{}, "35":{}, "36":{}, "37":{}, "38":{}})

  useEffect(() => {
    fetch("http://localhost:5000/api/product")
    .then(res => res.json())
    .then(res => setSmartHome(res.products))
  },[])

  const addToCart = (item) => {
    localStorage.shopping_cart = localStorage.shopping_cart + item
  }

  return(
    <div className = "minHeight">
      <h2 className = "center m-tb50-30" >Google</h2>
      <div className = "section2">
        <div className = "flex">
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {smartHome[34].IMAGE} alt = "Smart Home" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{smartHome[34].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {smartHome[34].PRICE}</p>
                    <p>Description: {smartHome[34].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(34)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {smartHome[35].IMAGE} alt = "Smart Home" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{smartHome[35].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {smartHome[35].PRICE}</p>
                    <p>Description: {smartHome[35].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(35)}>Add to Cart</Button></p>
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
                <img src = {smartHome[36].IMAGE} alt = "Smart Home" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{smartHome[36].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {smartHome[36].PRICE}</p>
                    <p>Description: {smartHome[36].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(36)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className = "center m-tb50-30" >Amazon</h2>
      <div className = "section2">
        <div className = "flex">
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {smartHome[37].IMAGE} alt = "Smart Home" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{smartHome[37].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {smartHome[37].PRICE}</p>
                    <p>Description: {smartHome[37].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(37)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {smartHome[38].IMAGE} alt = "Smart Home" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{smartHome[38].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {smartHome[38].PRICE}</p>
                    <p>Description: {smartHome[38].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(38)}>Add to Cart</Button></p>
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

export default SmartHome
