import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Car from './libs/car';

function App() {
  const [car, setCar] = useState(new Car(100, 100, 30, 50));
  const canvas = useRef(null);

  useEffect(
    () => {
      animate();
    }, []
  );

  const animate = () => {
    const ctx = canvas.current.getContext('2d');

    car.update();

    canvas.current.height = window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate);
  }


  return (
    <div className="App">
      <canvas ref={canvas} id="canvas" width="400" height="500"></canvas>
    </div>
  );
}

export default App;
