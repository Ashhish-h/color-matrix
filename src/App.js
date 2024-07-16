import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [clickOrder, setClickOrder] = useState([]);
  const [finalClick, setFinalClick] = useState(false);

  const handleClick = (index) => {
    if (!boxes[index]) {
      const newBoxes = [...boxes];
      newBoxes[index] = 'green';
      setBoxes(newBoxes);
      setClickOrder([...clickOrder, index]);

      if (clickOrder.length === 8) {
        setFinalClick(true);
        setTimeout(() => {
          let newBoxes = Array(9).fill(null);
          clickOrder.forEach((idx, order) => {
            setTimeout(() => {
              newBoxes[idx] = 'orange';
              setBoxes([...newBoxes]);
            }, order * 400); 
          });
          setTimeout(() => {
            newBoxes[8] = 'orange';
            setBoxes([...newBoxes]);
          }, clickOrder.length * 400);
        }, 500);
      }
    }
  };

  return (
    <div className="matrix">
      {boxes.map((color, index) => (
        <div 
        key = {index}
        className = "box"
        style = {{ backgroundColor: color || 'white'}}
        onClick = { () => handleClick(index)}
        ></div>
      ))}
    </div>
  );

};
export default App;
