/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import EarthClouds from "./EarthClouds";

function Planets({ planet, name, texture, posX, cshadow, rshadow, spinspeed }) {
  const planetsMesh = useRef();
  const texturePlanet = useLoader(TextureLoader, texture);
  const navigate = useNavigate();
  function planetLink() {
    navigate(`/planet/${planet}`);
  }

  useFrame(({ clock }) => {
    if (planetsMesh.current) {
      const elapsedTime = clock.getElapsedTime();
      planetsMesh.current.rotation.y = elapsedTime * spinspeed * 90;
    }
  });

  return (
    <>
      <mesh
        ref={planetsMesh}
        castShadow={cshadow}
        receiveShadow={rshadow}
        rotation={[0, 0, 0]}
        position={[posX, 0, 0]}
        onClick={planetLink}
      >
        <sphereGeometry attach="geometry" args={[1, 32, 32]} />
        <meshPhongMaterial attach="material" map={texturePlanet} />
        {name === "Terre" && <EarthClouds />}
      </mesh>
      <Text
        color="white"
        textAlign="center"
        fontSize="0.4"
        anchorX={-posX + 0.5}
        anchorY={1.6}
      >
        {name}
      </Text>
    </>
  );
}
Planets.propTypes = {
  planet: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  texture: PropTypes.string.isRequired,
  posX: PropTypes.number.isRequired,
  cshadow: PropTypes.bool.isRequired,
  rshadow: PropTypes.bool.isRequired,
  spinspeed: PropTypes.number.isRequired,
};
export default Planets;
