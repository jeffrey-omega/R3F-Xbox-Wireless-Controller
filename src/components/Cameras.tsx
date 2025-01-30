import scene from "@/data/scene.json";
import { IScene } from "@/types/scene";
import { PerspectiveCamera } from "@react-three/drei";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const Cameras = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);
  const { elements } = scene as IScene;

  const filterPerspectiveCameras = async () => {
    return elements?.filter(
      (element) =>
        //element.type === "PerspectiveCamera" ||
        element.type === "PhysicalCamera" || element.active === true
    );
  };

  const { data } = useQuery({
    queryKey: ["elements"],
    queryFn: filterPerspectiveCameras,
  });

  useEffect(() => {
    if (cameraRef.current) {
      //console.log("cameraRef", cameraRef.current);
      cameraRef.current.updateProjectionMatrix();
    }
  }, [cameraRef]);

  return (
    <>
      {data?.map((camera) => (
        <PerspectiveCamera
          key={camera.name}
          ref={cameraRef}
          //makeDefault={camera.active}
          far={camera.far}
          fov={camera.fov}
          near={camera.near}
          position={camera.position as [number, number, number]}
          rotation={camera.direction as [number, number, number]}
        />
      ))}
    </>
  );
};
