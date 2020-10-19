
// import { createStore, applyMiddleware } from "redux";
import { createStore, applyMiddleware } from "./redux";

function countReducer (state = 0, action) {
  switch(action.type) {
    case 'ADD':
      if (action.text) {
        return state + action.text
      }
      return state + 1
    case 'MINUS':
      return state - 1
    default:
      return state
  }
}

const store = createStore(countReducer, applyMiddleware(logger, thunk))

export default store

function logger ({getState, dispatch}) {
  return dispatch => action => {
    console.log(action.type, 'sss')
    return dispatch(action)
  }
}

function thunk ({getState, dispatch}) {
  return dispatch => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    } else {
      return dispatch(action)
    }
  }
}