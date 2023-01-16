const convertButton = document.getElementById("convert-button");
const inputArea = document.getElementById("input");
const outputArea = document.getElementById("output");

convertButton.addEventListener("click", () => {
  const input = inputArea.value;

  let output = input.replace(/regularReels/g, "regular");
  output = output.replace(/freeReels/g, "free");
  output = output.replace(/secondReels/g, "regular2");
  output = output.replace(/regularAlternative/g, "regular_alternative");
  output = output.replace(/regularAlternative2/g, "regular_alternative_2");
  output = output.replace(/bonusReels/g, "bonus");
  output = output.replace(/respinReels/g, "respin");
  output = output.replace(/superReels/g, "super");
  output = output.replace(/persistentReels/g, "persistent");
  output = output.replace(/persistentAlternative/g, "persistent_alternative");

  output = output.replace(/(\b(?!\d)[a-zA-Z_]+\b)/g, '"$1"');

  outputArea.value = output;
});
