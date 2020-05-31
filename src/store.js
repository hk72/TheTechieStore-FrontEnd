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
            }
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
    console.log(action.payload)
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
