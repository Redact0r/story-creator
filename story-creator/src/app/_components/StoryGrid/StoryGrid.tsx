import { useState } from "react";
import { StoryGridProps } from "../../_types/MapPageTypes";
import StoryGridCard from "./StoryGridCard";

const StoryGrid = (props: StoryGridProps) => {
  const { stories, updateSelectedStory } = props;

  const [selectedCard, setSelectedCard] = useState(999);
  const updateSelectedCard = (cardNumber: number) => {
    setSelectedCard(cardNumber);
    updateSelectedStory(cardNumber);
  };

  return (
    <div className="storyGridContainer flex flex-row justify-center items-center">
      {stories.map((story, idx) => {
        const { title, author, scenes } = story;
        return (
          <StoryGridCard
            key={idx}
            cardNumber={idx}
            title={title}
            author={author}
            scenes={scenes}
            isSelected={selectedCard === idx}
            updateSelectedCard={updateSelectedCard}
          ></StoryGridCard>
        );
      })}
    </div>
  );
};

export default StoryGrid;
