import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'

const Headphone = (props) => {

  const [headphones, setHeadphones] = useState({"25":{}, "26":{}, "27":{}, "28":{}, "29":{}})

  useEffect(() => {
    fetch("http://localhost:5000/api/product")
    .then(res => res.json())
    .then(res => setHeadphones(res.products))
  },[])

  const addToCart = (item) => {
    localStorage.shopping_cart = localStorage.shopping_cart + item
  }

  return(
    <div className = "minHeight">
      <h2 className = "center m-tb50-30" >Over Ear</h2>
      <div className = "section3">
        <div className = "flex">
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {headphones[25].IMAGE} alt = "Headphones" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{headphones[25].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {headphones[25].PRICE}</p>
                    <p>Description: {headphones[25].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(25)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {headphones[26].IMAGE} alt = "Headphones" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{headphones[26].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {headphones[26].PRICE}</p>
                    <p>Description: {headphones[26].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(26)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {headphones[27].IMAGE} alt = "Headphones" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{headphones[27].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {headphones[27].PRICE}</p>
                    <p>Description: {headphones[27].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(27)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <h2 className = "center m-tb50-30" >In Ear</h2>
    <div className = "section2">
      <div className = "flex">
        <div className = "f2">
          <div className = "card2 minImageHeight">
            <div className = "imageExpand rounded">
              <img src = {headphones[28].IMAGE} alt = "Headphones" className = "w-100"/>
              <div className = "cText wbg">
                <p>{headphones[28].NAME}</p>
              </div>
              <div className = "details">
                <div className = "contents">
                  <p>Cost: {headphones[28].PRICE}</p>
                  <p>Description: {headphones[28].DESCRIPTION}</p>
                  <p><Button variant="outline-light" onClick = {() => addToCart(28)}>Add to Cart</Button></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className = "f2">
          <div className = "card2 minImageHeight">
            <div className = "imageExpand rounded">
              <img src = {headphones[29].IMAGE} alt = "Headphones" className = "w-100"/>
              <div className = "cText wbg">
                <p>{headphones[29].NAME}</p>
              </div>
              <div className = "details">
                <div className = "contents">
                  <p>Cost: {headphones[29].PRICE}</p>
                  <p>Description: {headphones[29].DESCRIPTION}</p>
                  <p><Button variant="outline-light" onClick = {() => addToCart(29)}>Add to Cart</Button></p>
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

export default Headphone
