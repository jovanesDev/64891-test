import React from "react";

const ComponenteB = (props) => {
  const { text } = props;
  return (
    <div>
      <h1>ComponenteB</h1>
      <h1>Valor del prop text : {text}</h1>
    </div>
  );
};

export default ComponenteB;
