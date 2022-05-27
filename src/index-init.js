import store from './components/redux/store'
import {dataFlow, testimonials} from './database'

export const initializeAllRequests = async () => {
     await setDataFlow()
     await setTestimonials()
}

const setDataFlow = () => {
    store.dispatch({ type: 'SET_DATAFLOW', payload: dataFlow })
}

const setTestimonials = () => {
    store.dispatch({ type: 'SET_TESTIMONIALS', payload: testimonials })
}

