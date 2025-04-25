//your JS code here. If required.
function resetColors() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }
}

document.getElementById("Reset").addEventListener("click", resetColors);

document.getElementById("change_button").addEventListener("click", () => {
  resetColors();

  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  const block = document.getElementById(blockId);
  if (block) {
    block.style.backgroundColor = color;
  } else {
    alert("Please enter a valid block id from 1 to 9.");
  }
});
