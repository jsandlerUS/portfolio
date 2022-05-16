import React, {useEffect, useRef, useState, useCallback}  from 'react'

const RoundFog = () => {
    const [baseFrequency, setBaseFrequency] = useState('.01')
    let [frames, setFrames] = useState(1)
    const turbulenceRef = useRef(null)

    const freqAnimation = useCallback(() => {
        if (turbulenceRef.current !== undefined){
            let rad = Math.PI / 180;
            let bfx, bfy, bf;

            setFrames(frames += .2)

            bfx = 0.03;
            bfy = 0.03;
      
            bfx += 0.005 * Math.cos(frames * rad);
            bfy += 0.005 * Math.sin(frames * rad);
      
            bf = bfx.toString() + " " + bfy.toString();
            setBaseFrequency(bf.toString())
            turbulenceRef.current = requestAnimationFrame(freqAnimation);
        }
    },[turbulenceRef])
      
    useEffect(() => {
        turbulenceRef.current = requestAnimationFrame(freqAnimation);
       return () => cancelAnimationFrame(turbulenceRef.current);
    }, [freqAnimation]);
    
    return(
        <div className='round-fog'>
        <div></div>
        <svg width="0">
          <filter id="fog-filter" >
            <feTurbulence id="turbulence" ref={turbulenceRef} type="fractalNoise" baseFrequency={baseFrequency} numOctaves="6" />
            <feDisplacementMap in="SourceGraphic" scale="50" />
          </filter>
        </svg>
    </div>
    )
}

export default RoundFog