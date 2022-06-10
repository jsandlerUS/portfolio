import store from './components/redux/store'
import {dataFlow, testimonials} from './database'
import { getFlatArray } from "./components/Reusable/functions";

export const initializeAllRequests = async () => {
     await setDataFlow()
     await setTestimonials()
     await setFlatDataFlow()
}

const setDataFlow = () => {
    store.dispatch({ type: 'SET_DATAFLOW', payload: dataFlow })
}

const setTestimonials = () => {
    store.dispatch({ type: 'SET_TESTIMONIALS', payload: testimonials })
}

const setFlatDataFlow = () => {
    const flatDataFlow = getFlatArray(dataFlow);
    store.dispatch({ type: 'SET_FLATDATAFLOW', payload: flatDataFlow })
}
