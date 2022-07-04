import React, { useEffect, useState } from "react";

const Worm = () => {
  const [irisStyle, setIrisStyle] = useState({
    "--irisYaxis": "0px",
    "--irisXaxis": "0px",
  })
  const [prevIrisStyle, setPrevIrisStyle] = useState({
    "--prevIrisYaxis": "30px",
    "--prevIrisXaxis": "10px",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      var Yaxis = Math.random() * 100;
      if (Yaxis > 60) Yaxis -= 20;
      var Xaxis = Math.random() * 100;
      setPrevIrisStyle({
        "--irisYprevIrisYaxisxis": Yaxis + "%",
        "--prevIrisXaxis": Xaxis + "%",
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      var Yaxis = Math.random() * 100;
      if (Yaxis > 60) Yaxis -= 20;
      var Xaxis = Math.random() * 100;
      setIrisStyle({
        "--irisYaxis": Yaxis + "%",
        "--irisXaxis": Xaxis + "%",
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <React.Fragment>
      <div className="worm">
        <div className="worm-eye">
          <div className="worm-lid" />
          <div className="worm-iris" style={irisStyle}>
            <div className="worm-iris-container">
              <div className="worm-iris-glow" />
            </div>
          </div>
        </div>
      </div>
      <div className="worm2">
        <div className="worm-eye">
          <div className="worm-lid" />
          <div className="worm-iris" style={prevIrisStyle}>
            <div className="worm-iris-container">
              <div className="worm-iris-glow" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Worm;
