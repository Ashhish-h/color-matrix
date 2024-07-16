import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [clickOrder, setClickOrder] = useState([]);

  
  const handleClick = (index) => {
    if (!boxes[index]) { // checks if the box at the given index is clicked or not.
      // create and update a new array of boxes and is set to green.
      const newBoxes = [...boxes]; 
      newBoxes[index] = 'green';
      setBoxes(newBoxes);
      setClickOrder([...clickOrder, index]); // Update the state with the new click order including the current index.

      if (clickOrder.length === 8) { // If this is the ninth click (all boxes have been clicked)
        setTimeout(() => {
          let newBoxes = Array(9).fill(null);
          const newClickOrder = [...clickOrder, index];
          newClickOrder.forEach((idx, order) => {
            // Delay each box color change by 500ms multiplied by its order
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
