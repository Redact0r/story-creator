import { StoryObject } from "./dataTypes";
export const exampleStoryObject_1: StoryObject = {
  title: "Joke Thief",
  author: "Carlos Mencia",
  scenes: [
    {
      id: "The dilemma",
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

export const exampleStoryObject_2: StoryObject = {
  title: "Games of Scones",
  author: "George R.R. Fartin",
  scenes: [
    {
      id: "Beginning",
      idx: 1,
      sceneText:
        "You are the manager of a Starbucks. Corporate says you have to get rid of one of these bozos. First, let's see who messed up the most. You jiggle your keys in the damn lock that never works right and finally get it open. It's cold as balls. You hate this place, and you hate your employees even more.",
      nextScene: 2,
    },
    {
      id: "The Mess",
      idx: 2,
      sceneText:
        "The place is a mess again. Whoever closed last night is on the chopping block for sure. You go to the bean storage, and nothing is itemized and bags of beans have been left open. Robby signed off on it last night.\n\nNext up, you inspect the blender and the counters. Christina signed off on it, but there is still crud caked in the blender and a large sticky spot on the counter.\n\nFinally, you check the floors and the bathrooms. Amelia signed off on it, but she didn't clean the men's restroom, so now you have to do it. The floors are half-mopped near the door but under the tables are still unswept and disgusting.",
      nextScene: 3,
    },
    {
      id: "The decision",
      idx: 3,
      sceneText: "Alright, which of these bozos are you going to fire?",
      choices: [
        {
          num: 1,
          choiceText: "Fire Robby",
          nextScene: 4,
        },
        {
          num: 2,
          choiceText: "Fire Christina",
          nextScene: 5,
        },
        {
          num: 3,
          choiceText: "Fire Amelia",
          nextScene: 6,
        },
      ],
    },
    {
      id: "Fired Robby",
      idx: 2,
      sceneText:
        "Robby is let go for unsafe food storage procedures. You feel a small tinge gnawing at your conscience. Is that guilt? Nah, it must be pride.",
      nextScene: "end",
    },
    {
      id: "Fired Christina",
      idx: 2,
      sceneText:
        "Christina is fired for fraudulent documentation: signing off on cleaning that hadn't been done. Somehow in the course of the conversation you convince her to consider herself lucky that you haven't sued or arrested her. She leaves in tears without collecting her last check.",
      nextScene: "end",
    },
    {
      id: "Fired Amelia",
      idx: 2,
      sceneText:
        "The second worse offense you can commit is not doing your job. The worst? Making your manager do it for you. When she arrived, you sat her down and explained why she was being let go. You tell her no hard feelings, that's just business, and she leaves with a handshake. You had cleaned the filth in the men's restroom before she showed up for her shift, and you never washed your hands.",
      nextScene: "end",
    },
  ],
};

export const exampleStoryObject_3: StoryObject = {
  title: "Intern Running the Lab",
  author: "JD Scrubs",
  scenes: [
    {
      id: "The Experiment Begins",
      idx: 1,
      sceneText:
        "Dr. Frankenstein Jr is out of town, but you need to get this body animated for your client out by tomorrow! He's left a bunch of chemicals with no instructions. There's a red, a green, and a blue. Which one do you inject the corpse with?",
      choices: [
        {
          num: 1,
          choiceText: "Inject the Red Chemical",
          nextScene: 2,
        },
        {
          num: 2,
          choiceText: "Inject the Blue Chemical",
          nextScene: 3,
        },
        {
          num: 3,
          choiceText: "Inject the Green Chemical",
          nextScene: 3,
        },
      ],
    },
    {
      id: "Correct Chemical Injected",
      idx: 2,
      sceneText:
        "The body roars to life! Dr. Frankenstein Junior will be very happy. You prep the zombie for pick-up tomorrow.",
      nextScene: "end",
    },
    {
      id: "Wrong Chemical Injected",
      idx: 3,
      sceneText:
        "The body jolts for a second, before disintegrating into a pile of goo. Dr. Frankenstein is going to be pissed.",
      nextScene: "gameover",
    },
  ],
};
