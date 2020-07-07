import React, { useEffect } from 'react'
import history from '../../history'

const Browse = (props) => {

  useEffect(() =>{
    if(localStorage.shopping_cart === undefined){
      localStorage.setItem('shopping_cart', '')
    }
  },[])

  return(
    <div className = "minHeight">
      <h2 className = "center browseTitleTop" >Computers</h2>
        <div className = "section3">
          <div className = "flex">
            <div className = "f3">
              <div className = "card3" onClick = { () => {
                history.push('/laptops')
                window.scrollTo(0, 0)
               }}>
                <div className = "imageSlide rounded">
                  <img src = "laptopsCover.jpg" alt = 'Laptop' className = "w-100"/>
                  <div className = "cText">
                    <p>Laptops</p>
                  </div>
                </div>
              </div>
            </div>
            <div className = "f3">
              <div className = "card3" onClick = { () => {
                history.push('/computers')
                window.scrollTo(0, 0)
              }}>
                <div className = "imageSlide rounded">
                  <img src = "computersCover.jpg" alt = 'Computer' className = "w-100"/>
                  <div className = "cText wbg">
                    <p>Computers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className = "f3">
              <div className = "card3" onClick = { () => {
                history.push('/accessories')
                window.scrollTo(0, 0)
              }}>
                <div className = "imageSlide rounded">
                  <img src = "accesoriesCover.jpg" alt = 'Accessories' className = "w-100"/>
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
            <div className = "card2" onClick = { () => {
              history.push('/phones')
              window.scrollTo(0, 0)
            }}>
              <div className = "imageSlide rounded">
                <img src = "phoneCover.jpg" alt = 'Phone' className = "w-100"/>
                <div className = "cText">
                  <p>Phones</p>
                </div>
              </div>
            </div>
          </div>
          <div className = "f2">
            <div className = "card2" onClick = { () => {
              history.push('/tablets')
              window.scrollTo(0, 0)
            }}>
              <div className = "imageSlide rounded">
                <img src = "tabletCover.jpg" alt = 'Tablet' className = "w-100"/>
                <div className = "cText">
                  <p>Tablets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className = "center m-tb50-30" >Electronics</h2>
      <div style = {{paddingBottom: "50px"}} className = "section">
        <div className = "flex">
          <div className = "f3">
            <div className = "card3" onClick = { () => {
              history.push('/headphones')
              window.scrollTo(0, 0)
            }}>
              <div className = "imageSlide rounded">
                <img src = "headphonesCover.jpg" alt = 'Headphones' className = "w-100"/>
                <div className = "cText">
                  <p>Headphones</p>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3" onClick = { () => {
              history.push('/watches')
              window.scrollTo(0, 0)
            }}>
              <div className = "imageSlide rounded">
                <img src = "watchCover.jpg" alt = 'Watch' className = "w-100"/>
                <div className = "cText">
                  <p>Watch</p>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3" onClick = { () => {
              history.push('/smartHomes')
              window.scrollTo(0, 0)
            }}>
              <div className = "imageSlide rounded">
                <img src = "smarthomeCover.jpg" alt = 'SmartHome' className = "w-100"/>
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
