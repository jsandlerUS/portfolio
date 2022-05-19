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
      transform: "",
    };
    const rotX = (360 / display.length) * index;
    if (display.length === 3) pieButtonStyle.transform = `rotate(${rotX}deg) skewY(30deg) scale(1.2)`;
    else if (display.length === 4) pieButtonStyle.transform = `rotate(${rotX}deg) skewY(0deg)`;
    else if (display.length === 5) pieButtonStyle.transform = `rotate(${rotX}deg) skewY(-15deg)`;
    else if (display.length > 5) {
      const skewY = (5 * display.length) * -1
      pieButtonStyle.transform = `rotate(${rotX}deg) skewY(${skewY}deg)`;}
    return pieButtonStyle;
  };

  const getPieTextStyle = () => {
    let pieButtonStyle = {
      transform: "",
    };
    if (display.length === 3) pieButtonStyle.transform = `skewY(-30deg) rotate(55deg) scale(0.8)`;
    else if (display.length === 4) pieButtonStyle.transform = `skewY(0deg) rotate(45deg)`;
    else if (display.length === 5) pieButtonStyle.transform = `skewY(15deg) rotate(35deg)`;
    else if (display.length > 5) {
      const skewY = (5 * display.length)
      const rotX = 30 / (skewY / 30);
      pieButtonStyle.transform = `skewY(${skewY}deg) rotate(${rotX}deg)`;
    }
    return pieButtonStyle;
  };

  let i = 0;
  return (
    <ul className="pie-parent">
      {display.map((elem) => (
        <li
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
        </li>
      ))}
    </ul>
  );
});

export default PieDisplay;
