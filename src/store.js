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
  cart: [null],
  quantity: {},
  isLoggedIn: false
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
      if(localStorage.shopping_cart === undefined){
        localStorage.setItem('shopping_cart', '')
      }
      if(action.payload === undefined) {
        state = {
          ...state,
          cart: [null]
        }
      }else{
        state = {
          ...state,
          cart: action.payload
        }
      }
      if(state.cart.length>Object.keys(state.quantity).length){
        state.cart.forEach((i) => {
          if(i !== null){
            state = {
              ...state,
              quantity: {...state.quantity, [i.ID] : 1}
            }
          }
        })
      }
    break
    case 'CLEAR_CART':
      state = {
        ...state,
        cart: [null],
        quantity: {}
      }
      localStorage.shopping_cart = ''
    break
    case 'REMOVE_FROM_CART':
      state = {
        ...state,
        cart: state.cart.filter(element => {
          return element !== action.payload
        })
      }
      if (state.cart.length === 0){
        state = {
          ...state,
          cart: [null]
        }
      }
      const localStorageArr = localStorage.shopping_cart.split(',')
      const filtered = localStorageArr.filter(element => {
        return element !== action.payload.ID.toString()
      })
      localStorage.shopping_cart = filtered.join(',')
    break
    case 'UPDATE_QUANTITY':
        state = {
          ...state,
          quantity: {...state.quantity, [action.id]: action.quantity}
        }
    break
    case 'SET_LOGGED_IN':
    if(localStorage.isLoggedIn === undefined){
      localStorage.setItem('isLoggedIn', 'false')
    }
    if(action.payload === 'true'){
      localStorage.isLoggedIn = 'true'
      state = {
        ...state,
        isLoggedIn: true
      }
    }
    else if(action.payload === 'false'){
      localStorage.isLoggedIn = 'false'
      state = {
        ...state,
        isLoggedIn: false
      }
    }
    break
    case 'MATCH_IS_LOGGED_IN':
      if(localStorage.isLoggedIn === undefined){
        localStorage.setItem('isLoggedIn', 'false')
      }
      if(action.payload === 'true'){
        state = {
          ...state,
          isLoggedIn: true
        }
      }
      else if(action.payload === 'false'){
        state = {
          ...state,
          isLoggedIn: false
        }
      }
    break
    default :
    break
  }

  return state
}

const middleware = compose(
    applyMiddleware(ReduxThunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const store = createStore(
    reducer,
    initialState,
    middleware
)
