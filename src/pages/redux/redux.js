export function createStore (reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer)
  }
  let currentState = undefined
  let currentListeners = []

  function getState () {
    return currentState
  }

  function dispatch (action) {
    currentState = reducer(currentState, action)
    currentListeners.forEach(cb => cb())
  }

  function subscribe (cb) {
    currentListeners.push(cb)
  }
  dispatch({type: Symbol('init')})

  return {
    getState,
    dispatch,
    subscribe
  }
}

function composeFunc (...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a,b) => {
    return (...args) => {
      return a(b(...args))
    }
  })
}


export function applyMiddleware (...midlleWares) {

  return createStore => (...reducers) => {
    const store = createStore(...reducers)
    let dispatch = store.dispatch
    const middleApi = {
      getState: store.getState,
      dispatch
    }
    const middleWaresChain = midlleWares.map(middleWare => middleWare(middleApi))
    dispatch = composeFunc(...middleWaresChain)(dispatch)
    return {
      ...store,
      dispatch
    }
  }
}

