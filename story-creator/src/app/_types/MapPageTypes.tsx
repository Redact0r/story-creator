import { SceneObject, StoryObject } from "../../data/dataTypes";

export type StoryMapProps = {
  story: StoryObject;
};

export type StoryGridProps = {
  stories: StoryObject[];
  updateSelectedStory: Function;
};

export type StoryGridCardProps = {
  cardNumber: number;
  title: string;
  author: string;
  scenes?: SceneObject[];
  isSelected: boolean;
  updateSelectedCard: Function;
};

export type StoryMapSceneGridProps = {
  scenes: SceneObject[];
};

export type StoryMapSceneCardProps = {
  scene: SceneObject;
};
