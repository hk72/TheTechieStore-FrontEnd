import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'

const Laptop = (props) => {

  const [laptops, setLaptops] = useState({"1":{}, "2":{}, "3":{}, "4":{}, "5":{}, "6":{}, "7":{}, "8":{}})

  useEffect(() => {
    fetch("http://localhost:5000/api/product")
    .then(res => res.json())
    .then(res => setLaptops(res.products))
  },[])

  const addToCart = (item) => {
    localStorage.shopping_cart = localStorage.shopping_cart + item
  }

  return(
    <div className = "minHeight">
      <h2 className = "center m-tb50-30" >Apple</h2>
      <div className = "section3">
        <div className = "flex">
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img  src = {laptops[1].IMAGE} alt = "Laptop" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{laptops[1].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {laptops[1].PRICE}</p>
                    <p>Description: {laptops[1].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(1)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {laptops[2].IMAGE} alt = "Laptop" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{laptops[2].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {laptops[2].PRICE}</p>
                    <p>Description: {laptops[2].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(2)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {laptops[3].IMAGE} alt = "Laptop" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{laptops[3].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {laptops[3].PRICE}</p>
                    <p>Description: {laptops[3].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(3)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className = "center m-tb50-30" >Dell</h2>
      <div className = "section2">
        <div className = "flex">
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {laptops[4].IMAGE} alt = "Laptop" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{laptops[4].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {laptops[4].PRICE}</p>
                    <p>Description: {laptops[4].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(4)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {laptops[5].IMAGE} alt = "Laptop" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{laptops[5].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {laptops[5].PRICE}</p>
                    <p>Description: {laptops[5].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(5)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className = "center m-tb50-30" >HP</h2>
      <div className = "section3">
        <div className = "flex">
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {laptops[6].IMAGE} alt = "Laptop" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{laptops[6].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {laptops[6].PRICE}</p>
                    <p>Description: {laptops[6].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(7)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {laptops[7].IMAGE} alt = "Laptop" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{laptops[7].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {laptops[7].PRICE}</p>
                    <p>Description: {laptops[7].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(8)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {laptops[8].IMAGE} alt = "Laptop" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{laptops[8].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {laptops[8].PRICE}</p>
                    <p>Description: {laptops[8].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(8)}>Add to Cart</Button></p>
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

export default Laptop
