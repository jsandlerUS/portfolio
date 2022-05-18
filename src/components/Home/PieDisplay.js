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
    console.log(rotX, index);
    pieButtonStyle.transform = `rotate(${rotX}deg) skewY(0deg)`;
    return pieButtonStyle;
  };

  const getPieTextStyle = (index) => {
    let pieButtonStyle = {
      transform: "",
    };
    const rotX = 360 / display.length / 2;
    console.log("text", rotX, index);
    pieButtonStyle.transform = `rotate(${rotX}deg) skewY(0deg)`;
    return pieButtonStyle;
  };

  let i = 0;
  let j = 0;
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
          <pre className="pie-button--text" style={getPieTextStyle(j += 1)}>
            {elem.name}
          </pre>
        </div>
      ))}
    </div>
  );
});

export default PieDisplay;
