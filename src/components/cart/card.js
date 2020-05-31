import React from 'react'

const Card = (props) => {
  return(
    <div>
      <div className = "card3 minImageHeight">
        <div className = "imageExpand rounded">
          <img src ={props.info.IMAGE} alt = "Headphones" className = "w-100"/>
          <div className = "cText wbg">
            <p>{props.info.NAME}</p>
          </div>
          <div className = "details">
            <div className = "contents">
              <p>Cost: {props.info.PRICE}</p>
              <p>Description: {props.info.DESCRIPTION}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
