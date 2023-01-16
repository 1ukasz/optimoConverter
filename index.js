const convertButton = document.getElementById("convert-button");
const inputArea = document.getElementById("input");
const outputArea = document.getElementById("output");

convertButton.addEventListener("click", () => {
  const input = inputArea.value;

  let output = input.replace(/regularReels: /g, "regular: ");
  output = output.replace(/(\b(?!\d)[a-zA-Z_]+\b)/g, '"$1"');

  outputArea.value = output;
});
