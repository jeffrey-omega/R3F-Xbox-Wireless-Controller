import scene from "@/data/scene.json";
import { IScene } from "@/types/scene";
import { useQuery } from "@tanstack/react-query";

export const SpotLights = () => {
  const { elements } = scene as IScene;

  const filterPerspectiveCameras = async () => {
    return elements?.filter((element) => element.type === "SpotLight");
  };

  const { data } = useQuery({
    queryKey: ["elements"],
    queryFn: filterPerspectiveCameras,
  });

  return (
    <>
      {data?.map((spotLight) => (
        <spotLight
          key={spotLight.name}
          angle={spotLight.angle}
          intensity={spotLight.intensity}
          position={spotLight.position as [number, number, number]}
          rotation={spotLight.direction as [number, number, number]}
        />
      ))}
    </>
  );
};
