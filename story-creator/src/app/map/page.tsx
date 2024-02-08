"use client";
import {
  exampleStoryObjects,
  StoryObject,
  SceneObject,
} from "@/data/dataTypes";
import { useState } from "react";

export default function StoryMap() {
  const [storyData, setStoryData] = useState(exampleStoryObjects);
  return (
    <main>
      <h1>Story Map</h1>
      {StoryGrid(storyData)}
    </main>
  );
}

const StoryGrid = (stories: StoryObject[]) => {
  return (
    <div className="storyGridContainer flex flex-row justify-center items-center">
      {stories.map((story, idx) => {
        const { title, author, scenes } = story;
        return (
          <StoryGridCard
            key={idx}
            title={title}
            author={author}
            scenes={scenes}
          ></StoryGridCard>
        );
      })}
    </div>
  );
};

const StoryGridCard = (props: StoryGridCardProps) => {
  const { title, author, scenes } = props;
  return (
    <div className="storyGridCard border border-solid border-indigo-500 p-4 m-2">
      <h3>{title}</h3>
      <h5>{author}</h5>
      <p>Scenes: {scenes ? scenes.length : 0}</p>
    </div>
  );
};

type StoryGridCardProps = {
  title: string;
  author: string;
  scenes?: SceneObject[];
};
