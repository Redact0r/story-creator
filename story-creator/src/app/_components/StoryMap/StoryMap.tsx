import StoryMapSceneGrid from "./StoryMapSceneGrid";
import { StoryMapProps } from "../../_types/MapPageTypes";

const StoryMap = (props: StoryMapProps) => {
  const { title, author, scenes } = props.story;
  return (
    <div className="storyMapContainer">
      <h1>{title}</h1>
      <h3>{author}</h3>
      <StoryMapSceneGrid scenes={scenes}></StoryMapSceneGrid>
    </div>
  );
};

export default StoryMap;
