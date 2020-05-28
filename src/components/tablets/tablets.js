import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'

const Tablet = (props) => {

  const [tablets, setTablets] = useState({"23":{}, "24":{}})

  useEffect(() => {
    fetch("http://localhost:5000/api/product")
    .then(res => res.json())
    .then(res => setTablets(res.products))
  },[])

  const addToCart = (item) => {
    localStorage.shopping_cart = localStorage.shopping_cart + item
  }

  return(
    <div className = "minHeight">
      <h2 className = "center m-tb50-30" >Apple</h2>
      <div className = "section2">
        <div className = "flex">
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {tablets[23].IMAGE} alt = "Tablets" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{tablets[23].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {tablets[23].PRICE}</p>
                    <p>Description: {tablets[23].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(23)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {tablets[24].IMAGE} alt = "Tablets" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{tablets[24].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {tablets[24].PRICE}</p>
                    <p>Description: {tablets[24].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(24)}>Add to Cart</Button></p>
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

export default Tablet
