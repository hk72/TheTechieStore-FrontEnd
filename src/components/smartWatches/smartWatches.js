import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'

const SmartWatch = (props) => {

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
    <div>
      <h2 className = "center m-tb50-30" >Apple</h2>
      <div className = "section3">
        <div className = "flex">
          <div className = "f3">
            <div className = "card3">
              <div className = "imageExpand rounded">
                <img src = "computersCover.jpg" className = "w-100"/>
                <div className = "cText wbg">
                  <p>Computers</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: $9.00</p>
                    <p>Description: isupmsdnapsdgonsdgnksndgkn
                    nsdkgnpsamndgnsagdknpsag
                    osdngknsdgknpsakngas
                    oansdgnpasngdknas
                    pansdgoaskngda</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(1)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3">
              <div className = "imageExpand rounded">
                <img src = "computersCover.jpg" className = "w-100"/>
                <div className = "cText wbg">
                  <p>Computers</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: $9.00</p>
                    <p>Description: isupmsdnapsdgonsdgnksndgkn
                    nsdkgnpsamndgnsagdknpsag
                    osdngknsdgknpsakngas
                    oansdgnpasngdknas
                    pansdgoaskngda</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(1)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3">
              <div className = "imageExpand rounded">
                <img src = "computersCover.jpg" className = "w-100"/>
                <div className = "cText wbg">
                  <p>Computers</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: $9.00</p>
                    <p>Description: isupmsdnapsdgonsdgnksndgkn
                    nsdkgnpsamndgnsagdknpsag
                    osdngknsdgknpsakngas
                    oansdgnpasngdknas
                    pansdgoaskngda</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(1)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className = "center m-tb50-30" >Dell</h2>
      <div className = "section3">
        <div className = "flex">
          <div className = "f3">
            <div className = "card3">
              <div className = "imageExpand rounded">
                <img src = "computersCover.jpg" className = "w-100"/>
                <div className = "cText wbg">
                  <p>Computers</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: $9.00</p>
                    <p>Description: isupmsdnapsdgonsdgnksndgkn
                    nsdkgnpsamndgnsagdknpsag
                    osdngknsdgknpsakngas
                    oansdgnpasngdknas
                    pansdgoaskngda</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(1)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3">
              <div className = "imageExpand rounded">
                <img src = "computersCover.jpg" className = "w-100"/>
                <div className = "cText wbg">
                  <p>Computers</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: $9.00</p>
                    <p>Description: isupmsdnapsdgonsdgnksndgkn
                    nsdkgnpsamndgnsagdknpsag
                    osdngknsdgknpsakngas
                    oansdgnpasngdknas
                    pansdgoaskngda</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(1)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3">
              <div className = "imageExpand rounded">
                <img src = "computersCover.jpg" className = "w-100"/>
                <div className = "cText wbg">
                  <p>Computers</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: $9.00</p>
                    <p>Description: isupmsdnapsdgonsdgnksndgkn
                    nsdkgnpsamndgnsagdknpsag
                    osdngknsdgknpsakngas
                    oansdgnpasngdknas
                    pansdgoaskngda</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(1)}>Add to Cart</Button></p>
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
            <div className = "card3">
              <div className = "imageExpand rounded">
                <img src = "computersCover.jpg" className = "w-100"/>
                <div className = "cText wbg">
                  <p>Computers</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: $9.00</p>
                    <p>Description: isupmsdnapsdgonsdgnksndgkn
                    nsdkgnpsamndgnsagdknpsag
                    osdngknsdgknpsakngas
                    oansdgnpasngdknas
                    pansdgoaskngda</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(1)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3">
              <div className = "imageExpand rounded">
                <img src = "computersCover.jpg" className = "w-100"/>
                <div className = "cText wbg">
                  <p>Computers</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: $9.00</p>
                    <p>Description: isupmsdnapsdgonsdgnksndgkn
                    nsdkgnpsamndgnsagdknpsag
                    osdngknsdgknpsakngas
                    oansdgnpasngdknas
                    pansdgoaskngda</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(1)}>Add to Cart</Button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3">
              <div className = "imageExpand rounded">
                <img src = "computersCover.jpg" className = "w-100"/>
                <div className = "cText wbg">
                  <p>Computers</p>
                </div>
                <div className = "details">
                  <div className = "contents">
                    <p>Cost: $9.00</p>
                    <p>Description: isupmsdnapsdgonsdgnksndgkn
                    nsdkgnpsamndgnsagdknpsag
                    osdngknsdgknpsakngas
                    oansdgnpasngdknas
                    pansdgoaskngda</p>
                    <p><Button variant="outline-light" onClick = {() => addToCart(1)}>Add to Cart</Button></p>
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
