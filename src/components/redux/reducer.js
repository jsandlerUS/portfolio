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

const projects = (state = [], action = []) => {
  switch (action.type) {
    case 'SET_PROJECTS':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  testimonials,
  filterSelection,
  projects,
  dataFlow
})
