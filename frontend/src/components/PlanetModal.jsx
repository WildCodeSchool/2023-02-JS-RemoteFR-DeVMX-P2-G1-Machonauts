/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import PropTypes from "prop-types";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
// import { OrbitControls } from "@react-three/drei";

function PlanetModal({ Texture }) {
  const planetRef = useRef();
  const textureMap = useLoader(TextureLoader, Texture);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    planetRef.current.rotation.y = elapsedTime / 6;
  });
  console.info(Texture);
  // console.info(Texture);
  return (
    <>
      <pointLight position={[0, 0, 0]} intensity={1} />
      <mesh ref={planetRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshLambertMaterial map={textureMap} />
        <OrbitControls
          rotateSpeed={0.4}
          // eslint-disable-next-line react/jsx-boolean-value
          enableRotate={true}
          enableZoom={false}
          minZoom={100}
        />
      </mesh>
    </>
  );
}
PlanetModal.propTypes = {
  Texture: PropTypes.string.isRequired,
};
export default PlanetModal;