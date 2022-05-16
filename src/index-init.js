import store from './components/redux/store'
import {dataFlow} from './database'

export const initializeAllRequests = async () => {
     await setDataFlow()
}

const setDataFlow = () => {
    store.dispatch({ type: 'SET_DATAFLOW', payload: dataFlow })
}

