/* eslint-disable react/no-unknown-property */
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import sunText from "../assets/planets-surface/8k_sun.jpg";

function Sun() {
  const sunMesh = useRef();

  useFrame(({ clock }) => {
    if (sunMesh.current) {
      const elapsedTime = clock.getElapsedTime();
      sunMesh.current.rotation.y = elapsedTime / 15;
    }
  });

  const sun = useLoader(TextureLoader, sunText);

  return (
    <mesh ref={sunMesh} rotation={[0, 0, 0]} position={[-18, 0, 0]}>
      <sphereGeometry attach="geometry" args={[6, 64, 64]} />
      <meshBasicMaterial attach="material" map={sun} />
    </mesh>
  );
}

export default Sun;
