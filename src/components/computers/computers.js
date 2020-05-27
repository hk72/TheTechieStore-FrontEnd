import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'

const Computer = (props) => {

  const [computers, setComputers] = useState({"9":{}, "10":{}})

  useEffect(() => {
    fetch("http://localhost:5000/api/product")
    .then(res => res.json())
    .then(res => setComputers(res.products))
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
                <img src = {computers[9].IMAGE} alt = "Computer" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{computers[9].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {computers[9].PRICE}</p>
                    <p>Description: {computers[9].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(9)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f2">
            <div className = "card2 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {computers[10].IMAGE} alt = "Computer" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{computers[10].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {computers[10].PRICE}</p>
                    <p>Description: {computers[10].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(10)}>Add to Cart</Button></p>
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

export default Computer
