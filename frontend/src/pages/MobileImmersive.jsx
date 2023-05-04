/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import planets from "../datas/planets";
import Planets from "../components/Planets";

function MobileImmersive() {
  return (
    <div className="container-mobile-global">
      {Object.keys(planets).map((planet) => (
        <div key={planet} className="container-mobile">
          <Canvas
            camera={{
              zoom: 38,
              position: [0, 20, 50],
              fov: 76,
              near: 0.1,
              far: 1000,
            }}
          >
            <ambientLight intensity={0.4} />
            <pointLight position={[-50, 30, 60]} intensity={2} />
            <Planets
              planet={planet}
              name={planets[planet].name}
              texture={planets[planet].texture}
              posX={0}
              cshadow={planets[planet].cshadow}
              rshadow={planets[planet].rshadow}
              spinspeed={planets[planet].spinSpeed}
            />
          </Canvas>
          <h1>{planets[planet].name}</h1>
        </div>
      ))}
    </div>
  );
}

export default MobileImmersive;
