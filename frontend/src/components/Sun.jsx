import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
// import { OrbitControls } from "@react-three/drei";
import SunText from "../assets/planets-surface/8k_sun.jpg";

function Sun() {
  const sunMesh = useRef();

  useFrame(({ clock }) => {
    if (sunMesh.current) {
      const a = clock.getElapsedTime();
      sunMesh.current.rotation.y = a / 15;
    }
  });

  const sun = useLoader(TextureLoader, SunText);

  return (
    <mesh ref={sunMesh} rotation={[0, 0, 0]} position={[-18, 0, 0]}>
      <sphereGeometry attach="geometry" args={[6.5, 64, 64]} />
      <meshBasicMaterial attach="material" map={sun} />
    </mesh>
  );
}

export default Sun;
