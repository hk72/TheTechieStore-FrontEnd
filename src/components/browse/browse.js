import React from 'react'
import history from '../../history'


const Browse = (props) => {
  return(
    <div>
      <h2 className = "center m-tb50-30" >Computers</h2>
        <div className = "section3">
          <div className = "flex">
            <div className = "f3">
              <div className = "card3" onClick = { () => {
                history.push('/laptops')
                window.scrollTo(0, 0)
               }}>
                <div className = "imageSlide rounded">
                  <img src = "laptopsCover.jpg" className = "w-100"/>
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
                  <img src = "computersCover.jpg" className = "w-100"/>
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
            <div className = "card2" onClick = { () => {
              history.push('/phones')
              window.scrollTo(0, 0)
            }}>
              <div className = "imageSlide rounded">
                <img src = "phoneCover.jpg" className = "w-100"/>
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
            <div className = "card3" onClick = { () => {
              history.push('/headphones')
              window.scrollTo(0, 0)
            }}>
              <div className = "imageSlide rounded">
                <img src = "headphonesCover.jpg" className = "w-100"/>
                <div className = "cText">
                  <p>Headphones</p>
                </div>
              </div>
            </div>
          </div>
          <div className = "f3">
            <div className = "card3" onClick = { () => {
              history.push('/smartWatches')
              window.scrollTo(0, 0)
            }}>
              <div className = "imageSlide rounded">
                <img src = "watchCover.jpg" className = "w-100"/>
                <div className = "cText">
                  <p>Smart Watch</p>
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
