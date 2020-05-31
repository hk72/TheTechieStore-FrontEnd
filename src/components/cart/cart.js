import React, { useState, useEffect } from 'react'
import Card from './card'

const Cart = (props) => {

  const [cart, setCart] = useState(null)

  useEffect(() =>{
    fetch('http://localhost:5000/api/product/cart',{
      method: 'POST',
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify({'localStorage': localStorage.shopping_cart})
      })
      .then(res => res.json())
      .then(user => {
        setCart(user.objects)
    })
  },[])

  return(
    <div className = "minHeight">
      {cart === null
        ?
          <div>
          <h2> x</h2>
          </div>
        :
        <div>
        {console.log("cart", cart)}
          <h2 className = "center m-tb50-30" >Cart</h2>
          <div className = "section3">
            <div >
              {cart.map(info => <Card key = {info.ID} info = {info}/>)}
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Cart
