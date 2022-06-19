import React, { useEffect, useState, Children, cloneElement } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

export const CarouselItem = ({children, width, img}) =>{
  return (
    <img src={img} className="carousel-item carousel-image" alt={img}/>
  )
}

const Carousel = ({ props, children } ) => {
  const {images, github, viewLink, name } = props
  const [activeIndex, setActiveIndex] = useState(0);

useEffect(()=>{
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1)
    }, 2000)
    return ()=> {if(interval) {clearInterval(interval)}}
  })

  useEffect(()=>{
    updateIndex(0)
  }, [name])

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = Children.count(children) - 1
    }
    else if (newIndex >= Children.count(children)){
      newIndex = 0
    }
    setActiveIndex(newIndex)
  };
  return (
    <div className="carousel" >
        <div className="carousel-links">
        {github !==  undefined ? <a href={github} target="_blank" rel="noreferrer noopener">
            <GitHubIcon />
          </a> : null}
          {viewLink !==  undefined ? <a href={viewLink} target="_blank" rel="noreferrer noopener">
            <OpenInNewIcon />
          </a> : null}
        </div> 
        <div className="inner"
        style={{transform: `translateX(-${activeIndex * 100}%)`}}>
          {Children.map(children, (child, index)=>{
            return cloneElement(child, {width:"100%"})
          })}
        </div>
        {Children.count(children) !== 1 ?
        <div className="indicators">
          {Children.map(children, (child, index) =>{
            return <button
            className={`${index === activeIndex ? 'active' : ""}`} 
            onClick={()=> updateIndex(index)}/>
          })}
        </div> : null}
      {/* {images.length > 1 ? <div className="loader__element"></div> : null} */}
    </div>
  );
};

export default Carousel;
