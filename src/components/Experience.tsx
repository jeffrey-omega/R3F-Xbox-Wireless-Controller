import { Environment, OrbitControls } from "@react-three/drei";
import { XboxWirelessController } from "./XboxWirelessController";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={true} enablePan={false} />
      <Environment preset="studio" />
      <XboxWirelessController
        visible={true}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </>
  );
};
