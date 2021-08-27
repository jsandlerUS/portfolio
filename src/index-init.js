import store from './components/redux/store'
import { testimonials, projects} from './database'

export const initializeAllRequests = async () => {
     await getTestimonials()
     await getProjects()
}

const getTestimonials = () => {
    store.dispatch({ type: 'SET_TESTIMONIALS', payload: testimonials })
}

const getProjects = () => {
    store.dispatch({ type: 'SET_PROJECTS', payload: projects })
}