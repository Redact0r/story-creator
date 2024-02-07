export const navData: navDataType[] = [
  { title: "Home", href: "/" },
  { title: "Creator", href: "/creator" },
  { title: "Story Map", href: "/storymap" },
];

export type navDataType = {
  title: string;
  href: string;
};

//NOTES:
//Story scenes should be 100 - 500 words for readability.
//Choices should not exceed 200 words, and ideally are shorter than 100.

export const exampleStoryObject: StoryObject = {
  title: "Example Story",
  author: "Carlos Mencia",
  scenes: [
    {
      id: "Programmable by User",
      idx: 1,
      sceneText: "Which joke should Carlos steal next?",
      choices: [
        {
          num: 1,
          choiceText: "The one about an answering machine from Norm MacDonald",
          nextScene: 2,
        },
        {
          num: 2,
          choiceText: "Whatever bit Bobby Lee is working on next",
          nextScene: 3,
        },
        {
          num: 1,
          choiceText: "One of Joe Rogan's Fear Factor stories",
          nextScene: 4,
        },
      ],
    },
    {
      id: "He steals Norm's joke",
      idx: 2,
      sceneText:
        "The crowd goes quiet. Norm was loved here and they recognize the bit immediately. You are booed off stage.",
      nextScene: 5,
    },
    {
      id: "He steals Bobby Lee's bit",
      idx: 3,
      sceneText:
        "A couple chuckles. Bobby Lee isn't funny, and neither are you, so the crowd doesn't react much. You finish the set and walk off to polite claps.",
      nextScene: 6,
    },
    {
      id: "He steals Joe Rogan's story",
      idx: 4,
      sceneText:
        "The crowd erupts with laughter, assuming you are parodying Rogan. Whew, made it out of that one. You finish the set well to thunderous applause.",
      nextScene: 7,
    },
    {
      id: "Ending 1",
      idx: 5,
      sceneText:
        "You leave the club in disgrace. You were paid no money tonight.",
      nextScene: "end",
    },
    {
      id: "Ending 2",
      idx: 5,
      sceneText:
        "The crowd erupts with laughter, assuming you are parodying Rogan. Whew, made it out of that one. You finish the set well to thunderous applause.",
      nextScene: "end",
    },
    {
      id: "Ending 3",
      idx: 5,
      sceneText:
        "The crowd erupts with laughter, assuming you are parodying Rogan. Whew, made it out of that one. You finish the set well to thunderous applause.",
      nextScene: "end",
    },
  ],
};

interface StoryObject {
  title: string;
  author: string;
  scenes?: SceneObject[];
}

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
  nextScene: number | "end";
}

interface ChoiceObject {
  num: number;
  choiceText: string;
  nextScene: number;
}

export type SceneObject = SceneObjectNoChoices | SceneObjectWithChoices;
