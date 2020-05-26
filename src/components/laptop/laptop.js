import React from 'react'
import Button from 'react-bootstrap/Button'

const Laptop = (props) => {

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
                  <p>MacBook Air</p>
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
                    <p><Button variant="outline-light" onClick = {() => addToCart(2)}>Add to Cart</Button></p>
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
                    <p><Button variant="outline-light" onClick = {() => addToCart(3)}>Add to Cart</Button></p>
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
                    <p><Button variant="outline-light" onClick = {() => addToCart(4)}>Add to Cart</Button></p>
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
                    <p><Button variant="outline-light" onClick = {() => addToCart(5)}>Add to Cart</Button></p>
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
                    <p><Button variant="outline-light" onClick = {() => addToCart(6)}>Add to Cart</Button></p>
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
                    <p><Button variant="outline-light" onClick = {() => addToCart(7)}>Add to Cart</Button></p>
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
