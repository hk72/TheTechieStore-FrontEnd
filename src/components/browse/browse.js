import React, {useState, useEffect} from 'react'
import history from '../../history'
import './browse.css'

const Browse = (props) => {
  return(
    <div>
      <h2 className = "center m-tb50-30" >Computers</h2>
        <div className = "section3">
          <div className = "flex">
            <div className = "f3">
              <div className = "card3" onClick = { () => {history.push('/laptops')}}>
                <div className = "image rounded">
                  <img src = "laptopsCover.jpg" className = "w-100"/>
                  <div className = "cText">
                    <p>Laptops</p>
                  </div>
                </div>
              </div>
            </div>
            <div className = "f3">
              <div className = "card3" onClick = { () => {history.push('/computers')}}>
                <div className = "image rounded">
                  <img src = "computersCover.jpg" className = "w-100"/>
                  <div className = "cText wbg">
                    <p>Computers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className = "f3">
              <div className = "card3" onClick = { () => {history.push('/accessories')}}>
                <div className = "image rounded">
                  <img src = "accesoriesCover.jpg" className = "w-100"/>
                  <div className = "cText">
                    <p>Accessories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <h2 className = "center m-tb80-30" >Phones and Tablets</h2>
      <div className = "section2">
        <div className = "flex">
          <div className = "f2">
            <div className = "card2" onClick = { () => {history.push('/phones')}}>
              <div className = "image rounded">
                <img src = "phoneCover.jpg" className = "w-100"/>
                <div className = "cText">
                  <p>Phones</p>
                </div>
              </div>
            </div>
          </div>
          <div className = "f2">
            <div className = "card2" onClick = { () => {history.push('/tablets')}}>
              <div className = "image rounded">
                <img src = "tabletCover.jpg" className = "w-100"/>
                <div className = "cText">
                  <p>Tablets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className = "center m-tb50-30" >Electronics</h2>
      <div className = "section">
        <div className = "flex">
          <div className = "f3">
            <div className = "card3" onClick = { () => {history.push('/headphones')}}>
              <div className = "image rounded">
                <img src = "headphonesCover.jpg" className = "w-100"/>
                <div className = "cText">
                  <p>Headphones</p>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3" onClick = { () => {history.push('/smartWatches')}}>
              <div className = "image rounded">
                <img src = "watchCover.jpg" className = "w-100"/>
                <div className = "cText">
                  <p>Smart Watch</p>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3" onClick = { () => {history.push('/smartHome')}}>
              <div className = "image rounded">
                <img src = "smarthomeCover.jpg" className = "w-100"/>
                <div className = "cText">
                  <p>Smart Home</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Browse
