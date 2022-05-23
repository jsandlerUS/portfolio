import { combineReducers } from 'redux'

const testimonials = (state = [], action = []) => {
  switch (action.type) {
    case 'SET_TESTIMONIALS':
      return action.payload;
    default:
      return state;
  }
}

const filterSelection = (state = [], action = []) => {
  switch (action.type) {
    case 'ADD_FILTER':
      return ([...new Set([...state, action.selectedFilter])])
    case 'REMOVE_FILTER':
      return [...state.filter((filter, i) => i !== action.indexFilter)]
    default:
      return state;
  }
}

const dataFlow = (state = [], action = []) => {
  switch (action.type) {
    case 'SET_DATAFLOW':
      return action.payload;
    default:
      return state;
  }
}


const breadCrumbs = (state = ['Home'], action = []) => {
  switch (action.type) {
    case 'UPDATE_CRUMBS':
      return ([...new Set([...state, action.crumb])])
    case 'DELETE_CRUMBS':
      return state.slice(0, state.indexOf(action.crumb))
    default:
      return state;
  }
}

export default combineReducers({
  testimonials,
  filterSelection,
  dataFlow,
  breadCrumbs
})
