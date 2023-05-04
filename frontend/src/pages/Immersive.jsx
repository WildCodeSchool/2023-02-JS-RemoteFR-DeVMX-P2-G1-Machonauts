/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import planets from "../datas/planets";
import Planets from "../components/Planets";
import Sun from "../components/Sun";

function Immersive() {
  const [zoom, setZoom] = useState();

  useEffect(() => {
    if (window.innerWidth >= 2560) {
      setZoom(75);
    } else if (window.innerWidth >= 1920 && window.innerWidth < 2560) {
      setZoom(65);
    } else if (window.innerWidth > 1280 && window.innerWidth < 1920) {
      setZoom(50);
    } else if (window.innerWidth >= 1024 && window.innerWidth <= 1280) {
      setZoom(38);
    }
  }, []);

  return (
    <Canvas
      className="immersive"
      orthographic
      camera={{
        zoom: `${zoom}`,
        position: [0, 0, 10],
        rotation: [0, 0, 0],
        fov: 76,
        near: 0.1,
        far: 1000,
      }}
    >
      <ambientLight position={[0, 0, 0]} intensity={0.04} />
      <pointLight position={[-22, 0, 0]} intensity={1.5} scale={5} />
      <Sun />
      {Object.keys(planets).map((planet) => (
        <Planets
          key={planet}
          planet={planet}
          name={planets[planet].name}
          texture={planets[planet].texture}
          posX={planets[planet].posX}
          posText={planets[planet].posText}
          cshadow={planets[planet].cshadow}
          rshadow={planets[planet].rshadow}
          spinspeed={planets[planet].spinSpeed}
        />
      ))}
    </Canvas>
  );
}

export default Immersive;
