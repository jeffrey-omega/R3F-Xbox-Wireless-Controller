import { OrbitControls } from "@react-three/drei";
import { Cameras } from "./Cameras";
import { SpotLights } from "./SpotLights";
import { XboxWirelessController } from "./XboxWirelessController";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={true} enablePan={false} />
      <SpotLights />
      <Cameras />
      <XboxWirelessController
        visible={true}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </>
  );
};
