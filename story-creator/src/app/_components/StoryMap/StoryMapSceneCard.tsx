import { StoryMapSceneCardProps } from "../../_types/MapPageTypes";

const StoryMapSceneCard = (props: StoryMapSceneCardProps) => {
  //id, idx, sceneText, choices?, nextScene
  const { id, idx, sceneText, choices, nextScene } = props.scene;
  const sceneParagraphs = sceneText.split("\n");
  return (
    <div className="sceneCard">
      <div className="sceneCardNumber">{idx}</div>
      <h4>{id}</h4>
      {/* <input type="text" placeholder="Input scene title..." /> */}
      <div className="sceneTextContainer">
        {sceneParagraphs.map((p, i) => {
          return <p key={i}>{p}</p>;
        })}
      </div>
    </div>
  );
};

export default StoryMapSceneCard;
