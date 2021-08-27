import {useState, useEffect, useRef} from 'react'
import { useSelector} from 'react-redux';
import TestimonialCard from './testimonialCard';

const Testimonials = () =>{
    const testimonials = useSelector(state => state.testimonials);
    const [testimonial, setTestimonial] = useState(testimonials[0])
    const [current, setCurrent] = useState(0)
    const length = testimonials.length
    const autoPlayRef = useRef()

    useEffect(()=>{
        autoPlayRef.current = nextSlide
    })

    useEffect(()=>{
        const play = () =>{
            autoPlayRef.current()
        }
        setInterval(play, 8000)
    }, [])


    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
        setTestimonial(testimonials[current])
    }
    return(
        <div className="testimonials">
            <TestimonialCard testimonial={testimonial} key={testimonial.name}/>
        </div>
    )
}


export default Testimonials