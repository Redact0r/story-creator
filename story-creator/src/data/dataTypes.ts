import {
  exampleStoryObject_1,
  exampleStoryObject_2,
  exampleStoryObject_3,
} from "./storyExamples";

export const navData: navDataType[] = [
  { title: "Home", href: "/" },
  { title: "Creator", href: "/creator" },
  { title: "Story Map", href: "/map" },
];

export type navDataType = {
  title: string;
  href: string;
};

//NOTES:
//Story scenes should be 100 - 500 words for readability.
//Choices should not exceed 200 words, and ideally are shorter than 100.

export const exampleStoryObjects = [
  exampleStoryObject_1,
  exampleStoryObject_2,
  exampleStoryObject_3,
];

export type StoryObject = {
  title: string;
  author: string;
  scenes: SceneObject[];
};

interface BaseSceneObject {
  id: string;
  idx: number;
  sceneText: string;
}

interface SceneObjectWithChoices extends BaseSceneObject {
  choices: ChoiceObject[];
  nextScene?: never;
}

interface SceneObjectNoChoices extends BaseSceneObject {
  choices?: never;
  nextScene: number | "end" | "gameover";
}

interface ChoiceObject {
  num: number;
  choiceText: string;
  nextScene: number;
}

export type SceneObject = SceneObjectNoChoices | SceneObjectWithChoices;
