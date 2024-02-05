"use client";
import { ChangeEvent, useState } from "react";

export default function CreatorPage() {
  const [wordCount, setWordCount] = useState(0);
  const [currentWordCountColor, setCurrentWordCountColor] = useState("");
  const minWordCount = 100;
  const maxWordCount = 500;

  const handleKeyPress = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const wordCountRegEx = /\S*[a-z]\S*/gi;
    const storyText = e.target.value;
    const currentNumWords =
      storyText.match(wordCountRegEx) !== null
        ? storyText.match(wordCountRegEx)!.length
        : 0;

    updateWordCount(currentNumWords);
  };
  const updateWordCount = (currentNumWords: number) => {
    setWordCount(currentNumWords);

    let colorClass = "";
    if (currentNumWords < minWordCount) {
      colorClass = "text-yellow-500";
    } else if (
      currentNumWords >= minWordCount &&
      currentNumWords <= maxWordCount
    ) {
      colorClass = "";
    } else if (currentNumWords > maxWordCount) {
      colorClass = "text-red-500";
    }

    setCurrentWordCountColor(colorClass);
  };

  return (
    <div className="storyCreatorContainer">
      <h1>Story Creator</h1>
      <textarea onChange={(e) => handleKeyPress(e)}></textarea>
      <div className="wordCountContainer">
        <span
          className={`currentWordCount ${currentWordCountColor}`}
        >{`${wordCount}`}</span>
        /<span>{maxWordCount}</span>
      </div>
    </div>
  );
}
