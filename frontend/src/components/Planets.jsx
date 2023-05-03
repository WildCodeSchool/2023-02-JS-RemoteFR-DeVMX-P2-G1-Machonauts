import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import EarthClouds from "./EarthClouds";

function Planets({ planet, name, Texture, posX, cshadow, rshadow,spinspeed }) {
  const planetsMesh = useRef();
  const textureplanet = useLoader(TextureLoader, Texture);

  const navigate = useNavigate();
  function planetLink() {
    navigate(`/planet/${planet}`);
  }

  useFrame(({ clock }) => {
    if (planetsMesh.current) {
      const a = clock.getElapsedTime();
      planetsMesh.current.rotation.y = a / 6;

      planetsMesh.current.rotation.z = 0.4;
    
    }
  });

  return (
    <>
      <mesh
        ref={planetsMesh}
        castShadow={cshadow}
        receiveShadow={rshadow}
        rotation={[0, Math.PI / 8, 0]}
        position={[posX, 0, 0]}
        onClick={planetLink}
      >
        <sphereGeometry attach="geometry" args={[1, 32, 32]} rotateY={0.4} />
        <meshPhongMaterial attach="material" map={textureplanet} />
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

export default Planets;
