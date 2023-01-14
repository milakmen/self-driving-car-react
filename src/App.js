import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Car from './libs/car';
import Road from './libs/road';

function App() {
  const [ animationCalled, setAnimationCalled ] = useState(false);
  const [car, setCar] = useState(null);
  const [road, setRoad] = useState(null);
  const canvas = useRef(null);

  useEffect(
    () => {
      setRoad(new Road(canvas.current.width/2, canvas.current.width*0.9));
      
    }, []
  );

  useEffect(() => {
    if(road && car && !animationCalled) {
      
      animate();
      setAnimationCalled(true);
    } else if(road && !car) {
      setCar(new Car(road.getLaneCenter(1), 100, 50, 70));
    }
  }, [road, car])

  const animate = () => {
    const ctx = canvas.current.getContext('2d');

    car.update();

    canvas.current.height = window.innerHeight;

    ctx.save();
    ctx.translate(0, -car.y+ canvas.current.height*0.7);

    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate);
  }


  return (
    <div className="App">
      <canvas ref={canvas} id="canvas" width="250" height="500"></canvas>
    </div>
  );
}

export default App;
