export default class TextInput {
  constructor(minWordCount, maxWordCount) {
    this.minWordCount = minWordCount;
    this.maxWordCount = maxWordCount;
    this.currentWordCount = 0;
  }

  init() {
    const textInputAreaParent = document.createElement("div");
    const textInputArea = document.createElement("textArea");

    const textInputWordCounter = document.createElement("div");
    textInputWordCounter.setAttribute("id", "wordCounter");

    const wordCounterText = `<span id="wordCountCurrent">${this.currentWordCount}</span> / <span id="wordCountMax"> ${this.maxWordCount}</span>`;
    textInputWordCounter.innerHTML = wordCounterText;

    const mainWindow = document.getElementById("mainWindow");

    textInputAreaParent.appendChild(textInputArea);
    textInputAreaParent.appendChild(textInputWordCounter);
    mainWindow.appendChild(textInputAreaParent);

    textInputArea.addEventListener("keypress", (e) => {
      const wordCount = this.getWordCount(e.target.value) || 0;
      this.updateWordCount(wordCount);
      this.checkWordCount(wordCount, this.minWordCount, this.maxWordCount);
    });
  }

  getWordCount(storyText) {
    const wordCountRegEx = /\S*[a-z]\S*/gi;
    const wordCount =
      storyText.match(wordCountRegEx) !== null
        ? storyText.match(wordCountRegEx).length
        : 0;

    return wordCount;
  }

  updateWordCount(wordCount) {
    const wordCountCurrent = document.getElementById("wordCountCurrent");
    wordCountCurrent.innerHTML = wordCount;
  }

  checkWordCount(wordCount, minWordCount, maxWordCount) {
    const wordCountCurrent = document.getElementById("wordCountCurrent");

    if (wordCount < minWordCount) {
      console.log("condition 1");
      wordCountCurrent.classList.remove(...wordCountCurrent.classList);
      wordCountCurrent.classList.add("yellow");
    } else if (wordCount >= minWordCount && wordCount <= maxWordCount) {
      console.log("condition 2");
      wordCountCurrent.classList.remove(...wordCountCurrent.classList);
    } else if (wordCount > maxWordCount) {
      console.log("condition 3");
      wordCountCurrent.classList.remove(...wordCountCurrent.classList);
      wordCountCurrent.classList.add("red");
    }
  }
}
