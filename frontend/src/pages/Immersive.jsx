/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import planets from "../datas/planets";
import Planets from "../components/Planets";
import Sun from "../components/Sun";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Immersive() {
  const [zoom, setZoom] = useState();

  useEffect(() => {
    if (window.innerWidth >= 1920) {
      setZoom();
    } else if (window.innerWidth > 1200 && window.innerWidth < 1920) {
      setZoom(45);
    } else if (window.innerWidth >= 1024 && window.innerWidth <= 1200) {
      setZoom(35);
    }
  }, []);

  return (
    <>
      <Header />
      <Canvas
        className="immersive"
        orthographic
        camera={{
          zoom: `${zoom}`,
          position: [0, 0, 10],
          fov: 76,
          near: 0.1,
          far: 1000,
        }}
      >
        <ambientLight position={[0, 0, 0]} intensity={0.04} />
        <pointLight position={[22, 0, 0]} intensity={2.2} scale={5} />
        <Sun />
        {Object.keys(planets).map((planet) => (
          <Planets
            key={planet}
            planet={planet}
            name={planets[planet].name}
            Texture={planets[planet].Texture}
            posX={planets[planet].posX}
            cshadow={planets[planet].cshadow}
            rshadow={planets[planet].rshadow}
            spinspeed={planets[planet].spinSpeed}
          />
        ))}
      </Canvas>
      <Footer />
    </>
  );
}

export default Immersive;
