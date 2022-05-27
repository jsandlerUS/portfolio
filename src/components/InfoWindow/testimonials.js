import {useState, useEffect, useRef} from 'react'
import { useSelector} from 'react-redux';

const Testimonials = () => {
  const { testimonials } = useSelector((state) => state);
  const [testimonial, setTestimonial] = useState(testimonials[0]);
  const [current, setCurrent] = useState(0);
  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => autoPlayRef.current();
    setInterval(play, 17000);
  }, []);

  const nextSlide = () => {
    setCurrent(
      current === testimonials.length - 1 ? 0 : current + 1,
      setTestimonial(testimonials[current])
    );
  };
  return (
    <div className="contact-reviews">
      <div className="contact-reviews-background">
        <div className="contact-reviews__current">
          <div>{testimonial.review}</div>
          <pre>{testimonial.name}</pre>
        </div>
      </div>
    </div>
  );
};


export default Testimonials