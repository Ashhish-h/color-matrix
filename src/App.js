import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (!boxes[index]) {
      const newBoxes = [...boxes];
      newBoxes[index] = 'green';
      setBoxes(newBoxes);
      setClickOrder([...clickOrder, index]);

      if (clickOrder.length === 8) {
        setTimeout(() => {
          let newBoxes = Array(9).fill(null);
          const newClickOrder = [...clickOrder, index];
          newClickOrder.forEach((idx, order) => {
            setTimeout(() => {
              newBoxes[idx] = 'orange';
              setBoxes([...newBoxes]);
            }, order * 500); // 500ms delay between each box change
          });
        }, 500);
      }
    }
  };

  return (
    <div className="container">
      <h1>Color Changing Matrix</h1>
      <div className="matrix">
        {boxes.map((color, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: color || 'white' }}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default App;
