const TestimonialCard = ({testimonial}) => {

    const {name, image, review} = testimonial
    return(
        <div className="testimonialCard">
            <div className="testimonialReview">{review}</div>
            <div className="testimonialCardLeftSide">
                <img src={image} alt={name} className="testimonialImage"></img>
                <div className='testimonialName'>{name}</div>
            </div>
        </div>
    )
}

export default TestimonialCard