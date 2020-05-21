import React, {useState, useEffect} from 'react'
import { ArrowRight } from 'react-bootstrap-icons';
import './browse.css'

const Browse = (props) => {
  return(
    <div>
      <h2 className = "center m-t20" >Computers</h2>
        <div className = "section">
          <div className = "flex">
            <div className = "f3">
              <div className = "card3">
                <div className = "image rounded">
                  <img src = "laptopsCover.jpg" className = "w-100"/>
                  <div className = "cText">
                    <p>Laptops</p>
                    <p>View collection</p>
                  </div>
                </div>
              </div>
            </div>
            <div className = "f3">
              <div className = "card3">
                <div className = "image rounded">
                  <img src = "computersCover.jpg" className = "w-100"/>
                  <div className = "cText">
                    <p>Computers</p>
                    <p>View collection</p>
                  </div>
                </div>
              </div>
            </div>
            <div className = "f3">
              <div className = "card3">
                <div className = "image rounded">
                  <img src = "accesoriesCover.jpg" className = "w-100"/>
                  <div className = "cText">
                    <p>Accessories</p>
                    <p>View collection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <h2 className = "center" >Phones and Tablets</h2>
      <div className = "section">
        <div className = "flex">
          <div className = "f2">
            <div className = "card2">
              <div className = "image rounded">
                <img src = "phoneCover.jpg" className = "w-100"/>
                <div className = "cText">
                  <p>Phones</p>
                  <p>View collection</p>
                </div>
              </div>
            </div>
          </div>
          <div className = "f2">
            <div className = "card2">
              <div className = "image rounded">
                <img src = "tabletCover.jpg" className = "w-100"/>
                <div className = "cText">
                  <p>Tablets</p>
                  <p>View collection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className = "center" >Wearable Technology</h2>
      <div className = "section">
        <div className = "flex">
          <div className = "f3">
            <div className = "card3">
              <div className = "image rounded">
                <img src = "laptop.jpg" className = "w-100"/>
              </div>
              <div className = "cText">
                <p>asgag</p>
                <p>asgag</p>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3">
              <div className = "image rounded">
                <img src = "laptop.jpg" className = "w-100"/>
              </div>
              <div className = "cText">
                <p>asgag</p>
                <p>asgag</p>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3">
              <div className = "image rounded">
                <img src = "laptop.jpg" className = "w-100"/>
              </div>
              <div className = "cText">
                <p>asgag</p>
                <p>asgag</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Browse
