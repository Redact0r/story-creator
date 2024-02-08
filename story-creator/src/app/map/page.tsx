"use client";
import {
  exampleStoryObjects,
  StoryObject,
  SceneObject,
} from "@/data/dataTypes";
import { useState, MouseEvent } from "react";

export default function StoryMapPage() {
  const blankStoryObject: StoryObject = {
    title: "",
    author: "",
    scenes: [],
  };
  const [storyData, setStoryData] = useState(exampleStoryObjects);
  const [selectedStory, setSelectedStory] = useState(blankStoryObject);
  const [selectedStoryIdx, setSelectedStoryIdx] = useState(999);
  const [storyMapViewEnabled, setStoryMapViewEnabled] = useState(false);

  const updateSelectedStory = (cardNumber: number) => {
    const newStory = storyData[cardNumber];
    setSelectedStoryIdx(cardNumber);
    setSelectedStory(newStory);
    setStoryMapViewEnabled(true);
  };

  return (
    <main>
      <h1>Story Map</h1>
      <div className="StoryMapper">
        {storyMapViewEnabled ? (
          <StoryMap story={selectedStory}></StoryMap>
        ) : null}
      </div>
      {
        <StoryGrid
          stories={exampleStoryObjects}
          updateSelectedStory={updateSelectedStory}
        ></StoryGrid>
      }
    </main>
  );
}

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

const StoryMapSceneGrid = (props: StoryMapSceneGridProps) => {
  //id, idx, sceneText, choices?, nextScene
  const { scenes } = props;
  return (
    <div className="sceneCard">
      {/* {scenes.map((scene: SceneObject, idx: number) => {
          return (
            <StoryMapSceneCard key={idx} scene={scene}></StoryMapSceneCard>
          );
        })} */}
    </div>
  );
};

const StoryMapSceneCard = (props: StoryMapSceneCardProps) => {
  //id, idx, sceneText, choices?, nextScene
  const { id, idx, sceneText, choices, nextScene } = props.scene;
  return (
    <div className="sceneCard">
      <div className="sceneCardNumber">{idx}</div>
      <input type="text" placeholder="Input scene title...">
        {id}
      </input>
      <textarea>{sceneText}</textarea>
    </div>
  );
};

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

const StoryGridCard = (props: StoryGridCardProps) => {
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

const handleStoryGridCardClick = (e: MouseEvent, props: StoryGridCardProps) => {
  e.preventDefault();
  console.log(props);
};

type StoryMapProps = {
  story: StoryObject;
};

type StoryGridProps = {
  stories: StoryObject[];
  updateSelectedStory: Function;
};
type StoryGridCardProps = {
  cardNumber: number;
  title: string;
  author: string;
  scenes?: SceneObject[];
  isSelected: boolean;
  updateSelectedCard: Function;
};

type StoryMapSceneGridProps = {
  scenes: SceneObject[];
};

type StoryMapSceneCardProps = {
  scene: SceneObject;
};
