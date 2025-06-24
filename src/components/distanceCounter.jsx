import React, { useState } from "react";

const DistanceCounter = () => {
  const [distance, setDistance] = useState(0);
  const [stepSize, setStepSize] = useState(1);
  const yurish = () => {
    setDistance(distance + stepSize);
  };
  const qadamniKengaytirish = () => {
    setStepSize(stepSize + 1);
  };
  return (
    <div className="text-center my-5">
      <h1>{distance} metr</h1>

      <button onClick={yurish}>yurish</button>

      <p>Qadam kattaligi: {stepSize} metr</p>

      <button onClick={qadamniKengaytirish}>qadamni kengaytirish</button>
    </div>
  );
};

export default DistanceCounter;
