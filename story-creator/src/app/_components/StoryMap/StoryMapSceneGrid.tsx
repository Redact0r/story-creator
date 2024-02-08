import { SceneObject } from "@/data/dataTypes";
import StoryMapSceneCard from "./StoryMapSceneCard";
import { StoryMapSceneGridProps } from "../../_types/MapPageTypes";

const StoryMapSceneGrid = (props: StoryMapSceneGridProps) => {
  //id, idx, sceneText, choices?, nextScene
  const { scenes } = props;
  return (
    <div className="sceneCard">
      {scenes.map((scene: SceneObject, idx: number) => {
        return <StoryMapSceneCard key={idx} scene={scene}></StoryMapSceneCard>;
      })}
    </div>
  );
};

export default StoryMapSceneGrid;
