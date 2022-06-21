import React, { useEffect, useState } from "react";
// import android from '../../resources/Gifs/android.gif'

const Android = () => {
  // const [androidStyle, setAndroidStyle] = useState({ "top": "40%", "left": "10%" });

  useEffect(() => {
    const interval = setInterval(() => {
        var newTop = Math.random() * 100
        if (newTop < 40) newTop += 40
        if (newTop > 80) newTop -= 20
        var newLeft = Math.random() * 100
        if (newLeft > 80) newLeft -= 20
        // setAndroidStyle({top: newTop + '%', left: newLeft + '%'})
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="android">
      {/* <img src={android} alt="android" className="android-robot" style={androidStyle} /> */}
    </div>
  );
};

export default Android;
