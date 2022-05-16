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

  console.log(display);

  //apply math, divide 360 / items.length()
  //assign that value in equal increasing proportions to each element
  //set the skewY value based on this.
  let pieButtonStyle = {
    transform: 'rotate(0deg) skewY(-60deg)'
  }

  return (
    <div className="pie-parent">
      {display.map((elem) => (
        <div
          className="pie-button"
          style={pieButtonStyle}
          key={elem.name}
          onClick={
            elem.items ? () => updateDisplay(elem.name) : () => showWindow()
          }
          ref={ref}
        >
          {elem.name}
        </div>
      ))}
    </div>
  );
});

export default PieDisplay;
