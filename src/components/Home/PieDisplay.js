import React, { useState, forwardRef } from "react";
import { useSelector } from "react-redux";

const PieDisplay = forwardRef(({ showWindow }, ref) => {
  const dataFlow = useSelector((state) => state.dataFlow);
  const [display, setDisplay] = useState(dataFlow.map((item) => item));

  const updateDisplay = (elem) => {
    let search = null;
    search = dataFlow
      .map((item) => (item.name === elem ? item : null))
      .filter((value) => value !== null);
    if (search == null)
      dataFlow.map((item) => {
        return item.items.map((item2) => item2.name === elem);
      });
    setDisplay(search[0].items);
  };

  const getPieStyle = (index) => {
    let pieButtonStyle = {
      "--rotX":"",
      "--skewY":"",
      "--scale":"1"
    };
    const rotX = (360 / display.length) * index;
    const skewY = (5 * display.length) * -1
    if (display.length === 3) {
      pieButtonStyle["--skewY"] = `30deg`
      pieButtonStyle["--scale"] = `1.2`
    }
    else if (display.length === 4) pieButtonStyle["--skewY"] = `0deg`
    else if (display.length === 5) pieButtonStyle["--skewY"] = `-19deg`
    else if (display.length > 5) pieButtonStyle["--skewY"] = `${skewY}deg`

    pieButtonStyle["--rotX"] = `${rotX}deg`


    return pieButtonStyle;
  };

  const getPieTextStyle = () => {
    let pieButtonStyle = {
      "--rotX":"",
      "--skewY":"",
      "--scale":"1"
    };
    //invert/flip text for elements that are over 180 deg.
    const skewY = (5 * display.length)
    const rotX = 30 / (skewY / 30);
    if (display.length === 3) {
      pieButtonStyle["--rotX"] = `55deg`
      pieButtonStyle["--skewY"] = `-30deg`
      pieButtonStyle["--scale"] = `0.8`
    }
    else if (display.length === 4) {
      pieButtonStyle["--rotX"] = `45deg`
      pieButtonStyle["--skewY"] = `0deg`
    }
    else if (display.length === 5) {
      pieButtonStyle["--rotX"] = `32deg`
      pieButtonStyle["--skewY"] = `20deg`
    }
    else if (display.length > 5) {
      pieButtonStyle["--rotX"] = `${rotX}deg`
      pieButtonStyle["--skewY"] = `${skewY}deg`
    }

    return pieButtonStyle;
  };

  let i = -1;
  return (
    <div className="pie-parent">
      {display.map((elem) => (
        <div
          className="pie-button"
          style={getPieStyle(i += 1)}
          key={elem.name}
          onClick={
            elem.items ? () => updateDisplay(elem.name) : () => showWindow()
          }
          ref={ref}
        >
          <pre className="pie-button--text" style={getPieTextStyle()}>
            {elem.name}
          </pre>
        </div>
      ))}
    </div>
  );
});

export default PieDisplay;
