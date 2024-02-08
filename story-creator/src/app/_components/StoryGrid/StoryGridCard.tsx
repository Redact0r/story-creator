import { MouseEvent } from "react";
import { StoryGridCardProps } from "../../_types/MapPageTypes";

const StoryGridCard = (props: StoryGridCardProps) => {
  const handleStoryGridCardClick = (
    e: MouseEvent,
    props: StoryGridCardProps
  ) => {
    e.preventDefault();
    console.log(props);
  };

  const { cardNumber, title, author, scenes, isSelected, updateSelectedCard } =
    props;
  return (
    <div
      className={`storyGridCard border border-solid border-indigo-500 p-4 m-2 hover:cursor-pointer hover:bg-indigo-700 ${
        isSelected ? "bg-indigo-700" : ""
      }`}
      onClick={(e) => {
        updateSelectedCard(cardNumber);
        handleStoryGridCardClick(e, props);
      }}
    >
      <h3>{title}</h3>
      <h5>{author}</h5>
      <p>Scenes: {scenes ? scenes.length : 0}</p>
    </div>
  );
};

export default StoryGridCard;
