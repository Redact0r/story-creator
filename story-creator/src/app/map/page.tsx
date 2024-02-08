"use client";
import { exampleStoryObjects, StoryObject } from "@/data/dataTypes";
import { useState, MouseEvent } from "react";

import StoryGrid from "../_components/StoryGrid/StoryGrid";
import StoryMap from "../_components/StoryMap/StoryMap";

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
    if (!storyMapViewEnabled) {
      setStoryMapViewEnabled(true);
    }
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
