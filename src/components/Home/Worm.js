import React, {useEffect, useState} from 'react'


const Worm = () => {
  const [irisStyle, setIrisStyle] = useState({
    "--Yaxis": "0%",
    "--Xaxis": "0%",
    "--preYaxis": "0%",
    "--preXaxis": "0%",
  });
  const [preIrisStyle, setPreIrisStyle] = useState({
    "--preYaxis": "0%",
    "--preXaxis": "0%",
  });
  const [axis, setAxis] = useState({ Yaxis: "0%", Xaxis: "0%" });

  useEffect(() => {
    setIrisStyle({
      "--Yaxis": axis["Yaxis"],
      "--Xaxis": axis["Xaxis"],
      "--preYaxis": preIrisStyle["--preYaxis"],
      "--preXaxis": preIrisStyle["--preXaxis"],
    });
    setPreIrisStyle({
      "--preYaxis": axis["Yaxis"],
      "--preXaxis": axis["Xaxis"],
    });
  }, [axis]);

  useEffect(() => {
    const interval = setInterval(() => {
      var Yaxis = Math.random() * 100;
      // if (Yaxis < 40) Yaxis += 40
      if (Yaxis > 60) Yaxis -= 20;
      var Xaxis = Math.random() * 100;
      // if (Xaxis > 40) Xaxis -= 20
      setAxis({ Yaxis: Yaxis + "%", Xaxis: Xaxis + "%" });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
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
  );
};

export default Worm