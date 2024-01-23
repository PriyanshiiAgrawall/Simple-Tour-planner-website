import React, { useState } from "react";
import data from './data.js';
import Tours from './Component/Tours';

const App = () => {

  const [tours, setTours] = useState(data)
  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id)
    //hum filter karre hain ki purane vale sabb tours me se hum sirf vohi tour isme dalenge jinki id match nahi ho ri hai 
    setTours(newTours);
  }
  function refreshHandler() {
    setTours(data)

  }
  //if koi bhi city nhi hai tours array me
  if (tours.length === 0) {
    return (
      <div>
        <h2>No Tours Left</h2>
        <button onClick={refreshHandler}>REFRESH</button>
      </div>
    )
  }
  return (<div>
    <h1>Travel Wiith Priyanshi</h1>
    <Tours tours={tours} removeTour={removeTour}></Tours>
  </div>)
};

export default App;
