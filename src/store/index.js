import { createStore } from 'redux'

const INITIAL_STATE = {
  data: [
    'Eduardo Correa',
    'Camilla Farias',
    'Pedro Paulo',
    'Luiz Guiherme',
    'Ruth Meri',
  ],
}

function contributorsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_CONT':
      return { ...state, data: [...state.data, action.name] }
    default:
      return state
  }
}

const store = createStore(contributorsReducer)

export default store
