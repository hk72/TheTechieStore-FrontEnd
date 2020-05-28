import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'

const Accessories = (props) => {

  const [accessories, setAccessories] = useState({"11":{}, "12":{}, "13":{}, "14":{}, "15":{}, "16":{}})

  useEffect(() => {
    fetch("http://localhost:5000/api/product")
    .then(res => res.json())
    .then(res => setAccessories(res.products))
  },[])

  const addToCart = (item) => {
    localStorage.shopping_cart = localStorage.shopping_cart + item
  }

  return(
    <div className = "minHeight">
      <h2 className = "center m-tb50-30" >Keyboards</h2>
      <div className = "section3">
        <div className = "flex">
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {accessories[11].IMAGE} alt = "Accessories" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{accessories[11].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {accessories[11].PRICE}</p>
                    <p>Description: {accessories[11].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(11)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {accessories[12].IMAGE} alt = "Accessories" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{accessories[12].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {accessories[12].PRICE}</p>
                    <p>Description: {accessories[12].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(12)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {accessories[13].IMAGE} alt = "Accessories" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{accessories[13].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {accessories[13].PRICE}</p>
                    <p>Description: {accessories[13].PRICE}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(13)}>Add to Cart</Button></p>
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
                <img src = {accessories[14].IMAGE} alt = "Accessories" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{accessories[14].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {accessories[14].PRICE}</p>
                    <p>Description: {accessories[14].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(14)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {accessories[15].IMAGE} alt = "Accessories" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{accessories[15].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {accessories[15].PRICE}</p>
                    <p>Description: {accessories[15].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(15)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {accessories[16].IMAGE} alt = "Accessories" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{accessories[16].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {accessories[16].PRICE}</p>
                    <p>Description: {accessories[16].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(16)}>Add to Cart</Button></p>
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

export default Accessories
