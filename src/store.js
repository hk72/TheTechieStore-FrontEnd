import { createStore, compose, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

const initialState = {
  products: {
              "1":{},
              "2":{},
              "3":{},
              "4":{},
              "5":{},
              "6":{},
              "7":{},
              "8":{},
              "9":{},
              "10":{},
              "11":{},
              "12":{},
              "13":{},
              "14":{},
              "15":{},
              "16":{},
              "17":{},
              "18":{},
              "19":{},
              "20":{},
              "21":{},
              "22":{},
              "23":{},
              "24":{},
              "25":{},
              "26":{},
              "27":{},
              "28":{},
              "29":{},
              "30":{},
              "31":{},
              "32":{},
              "33":{},
              "34":{},
              "35":{},
              "36":{},
              "37":{},
              "38":{}
            },
  cart: null
}

const reducer = ( state, action ) => {
  switch(action.type){
    case 'GET_PRODUCTS':
      state = {
        ...state,
        products: action.payload
      }
    break
    case 'ADD_TO_CART':
      if(localStorage.shopping_cart === undefined){
        localStorage.setItem('shopping_cart', '')
      }
      const localStorageArray = localStorage.shopping_cart.split(',')
      if(!localStorageArray.includes(action.payload.toString()) && (localStorage.shopping_cart !== '')){
        localStorage.shopping_cart = localStorage.shopping_cart + ',' + action.payload
      }
      else if(!localStorageArray.includes(action.payload.toString())){
        localStorage.shopping_cart = localStorage.shopping_cart + action.payload
      }
    break
    case 'GET_CART':
      state = {
        ...state,
        cart: action.payload
      }
    break
    case 'REMOVE_FROM_CART':
      state = {
        ...state,
        cart: state.cart.filter(element => {
          return element !== action.payload
        })
      }
      const localStorageArr = localStorage.shopping_cart.split(',')
      const filtered = localStorageArr.filter(element => {
        return element !== action.payload.ID.toString()
      })
      localStorage.shopping_cart = filtered.join(',')
    break
    case 'HANDLE_QUANTITY':
      if(localStorage.quantity === undefined){
        localStorage.setItem('quantity', '')
      }
      const localStorageQuantityArray = localStorage.quantity.split(',')
      const indexOfRequest = localStorageQuantityArray.indexOf(action.ID + '=' + action.quantity-1)
      console.log(action.quantity)
      console.log(indexOfRequest)
      if(localStorage.quantity === ''){
        localStorage.quantity = localStorage.quantity + action.ID + '=' + action.quantity
      }
      else if(localStorage.quantity !== ''){
        localStorageQuantityArray[indexOfRequest] = action.ID + '=' + action.quantity
              console.log(localStorageQuantityArray)
        localStorage.quantity = localStorageQuantityArray
      }
    break
  }

  return state
}

const middleware = compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const store = createStore(
    reducer,
    initialState,
    middleware
)
