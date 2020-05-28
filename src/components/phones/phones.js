import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'

const Phone = (props) => {

  const [phone, setPhones] = useState({"17":{}, "18":{}, "19":{}, "20":{}, "21":{}, "22":{}})

  useEffect(() => {
    fetch("http://localhost:5000/api/product")
    .then(res => res.json())
    .then(res => setPhones(res.products))
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
                <img src = {phone[17].IMAGE} alt = "Phones" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{phone[17].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {phone[17].PRICE}</p>
                    <p>Description: {phone[17].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(17)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {phone[18].IMAGE} alt = "Phones" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{phone[18].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {phone[18].PRICE}</p>
                    <p>Description: {phone[18].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(18)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {phone[19].IMAGE} alt = "Phones" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{phone[19].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {phone[19].PRICE}</p>
                    <p>Description: {phone[19].PRICE}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(19)}>Add to Cart</Button></p>
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
                <img src = {phone[20].IMAGE} alt = "Phones" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{phone[20].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {phone[20].PRICE}</p>
                    <p>Description: {phone[20].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(20)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {phone[21].IMAGE} alt = "Phones" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{phone[21].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {phone[21].PRICE}</p>
                    <p>Description: {phone[21].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(21)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3 minImageHeight">
              <div className = "imageExpand rounded">
                <img src = {phone[22].IMAGE} alt = "Phones" className = "w-100"/>
                <div className = "cText wbg">
                  <p>{phone[22].NAME}</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: {phone[22].PRICE}</p>
                    <p>Description: {phone[22].DESCRIPTION}</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(22)}>Add to Cart</Button></p>
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

export default Phone
