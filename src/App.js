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
      setBoxes(newBoxes); // update the state with new boxes array
      setClickOrder([...clickOrder, index]); // Update the state with the new click order including the current index.

      if (clickOrder.length === 8) { // If this is the ninth click (all boxes have been clicked)
        setTimeout(() => { // delay the start of the color change sequence
          let newBoxes = Array(9).fill(null);  // initialize a new array to store color boxes
          const newClickOrder = [...clickOrder, index]; 
          newClickOrder.forEach((idx, order) => { //iterate over the newCLickOrder and set color of each box to orange
            setTimeout(() => {  // 500ms delay between each box change
              newBoxes[idx] = 'orange';
              setBoxes([...newBoxes]);
            }, order * 500); 
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
