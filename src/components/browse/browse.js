import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import './browse.css'
const Browse = (props) => {
  return(
    <div>
      <h2 className = "center m-t20" >Computers</h2>
        <div className = "section">
          <div className = "flex">
            <div className = "f3">
              <div className = "card">
                <img src = "laptop.jpg" className = "w-100 rounded"/>
                <div className = "cText">
                  <p>asgag</p>
                  <p>asgag</p>
                </div>
              </div>
            </div>
            <div className = "f3">
              <div className = "card">
              <img src = "laptop.jpg" className = "w-100 rounded"/>
              <div className = "cText">
                <p>asgag</p>
                <p>asgag</p>
              </div>
              </div>
            </div>
            <div className = "f3">
              <div className = "card">
              <img src = "laptop.jpg" className = "w-100 rounded"/>
              <div className = "cText">
                <p>asgag</p>
                <p>asgag</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      <h2 className = "center" >Phones and Tablets</h2>
      <div className = "section">
        <div className = "flex">
          <div className = "f3">
            <div className = "card">
              <img src = "laptop.jpg" className = "w-100 rounded"/>
              <div className = "cText">
                <p>asgag</p>
                <p>asgag</p>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card">
            <img src = "laptop.jpg" className = "w-100 rounded"/>
            <div className = "cText">
              <p>asgag</p>
              <p>asgag</p>
            </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card">
            <img src = "laptop.jpg" className = "w-100 rounded"/>
            <div className = "cText">
              <p>asgag</p>
              <p>asgag</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className = "center" >Wearable Technology</h2>
      <div className = "section">
        <div className = "flex">
          <div className = "f3">
            <div className = "card">
              <img src = "laptop.jpg" className = "w-100 rounded"/>
              <div className = "cText">
                <p>asgag</p>
                <p>asgag</p>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card">
            <img src = "laptop.jpg" className = "w-100 rounded"/>
            <div className = "cText">
              <p>asgag</p>
              <p>asgag</p>
            </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card">
            <img src = "laptop.jpg" className = "w-100 rounded"/>
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
