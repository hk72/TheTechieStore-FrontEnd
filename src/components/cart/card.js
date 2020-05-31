import React from 'react'

const Card = (props) => {
  return(
    <div>
    // {console.log(props)}
      <div className = "card3 minImageHeight">
        <div className = "imageExpand rounded">
          <img src = "computersCover.jpg" alt = "Headphones" className = "w-100"/>
          <div className = "cText wbg">
            <p>{}</p>
          </div>
          <div className = "details">
            <div className = "contents">
              <p>Cost: {}</p>
              <p>Description: {}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
