import { StoryMapSceneCardProps } from "./types";

const StoryMapSceneCard = (props: StoryMapSceneCardProps) => {
  //id, idx, sceneText, choices?, nextScene
  const { id, idx, sceneText, choices, nextScene } = props.scene;
  return (
    <div className="sceneCard">
      <div className="sceneCardNumber">{idx}</div>
      <input type="text" placeholder="Input scene title..." />
      <textarea>{sceneText}</textarea>
    </div>
  );
};

export default StoryMapSceneCard;
