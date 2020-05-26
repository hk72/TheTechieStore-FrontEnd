import React, { useEffect } from 'react'

const Cart = (props) => {

  useEffect(() =>{
    fetch('http://localhost:5000/api/user/viewCart',{
      method: 'POST',
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify({'localStorage': localStorage.shopping_cart})
      })
      .then(res => res.json())
      .then(user => {
          console.log(user)
    })
  },[])


  return(
    <div>
      <h1>Carts</h1>
    </div>
  )
}

export default Cart
