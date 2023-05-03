/* eslint-disable react/no-unknown-property */
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader, DoubleSide } from "three";
import Clouds from "../assets/planets-surface/earth_clouds.jpg";

function EarthClouds() {
  const cloudMesh = useRef();
  const clouds = useLoader(TextureLoader, Clouds);

  useFrame(({ clock }) => {
    if (cloudMesh.current) {
      const a = clock.getElapsedTime();
      cloudMesh.current.rotation.y = a / 15;
    }
  });

  return (
    <mesh ref={cloudMesh}>
      <sphereGeometry args={[1.008, 32, 32]} attach="geometry" />
      <meshPhongMaterial
        alphaMap={clouds}
        // eslint-disable-next-line react/jsx-boolean-value
        transparent={true}
        attach="material"
        side={DoubleSide}
      />
    </mesh>
  );
}

export default EarthClouds;
