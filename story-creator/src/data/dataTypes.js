export const navData = [
  { title: "Home", href: "/" },
  { title: "Creator", href: "/creator" },
  { title: "Story Map", href: "/storymap" },
];

export const storyObject = {
  title: "",
  author: "",
  scenes: [{}, {}],
};

//NOTES:
//Story scenes should be 100 - 500 words for readability.
//Choices should not exceed 200 words, and ideally are shorter than 100.

export const exampleStoryObject = {
  title: "Example Story",
  author: "Carlos Mencia",
  scenes: [
    {
      id: "Programmable by User",
      idxNumber: 1,
    },
  ],
};
