let arr = [1, 7, 3, 1, 0, 20, 77];
let updatedArray = document.getElementById("updatedArray");
updatedArray.textContent = "[" + arr + "]";

let startIndexInput = document.getElementById("startIndexInput");
let deleteCountInput = document.getElementById("deleteCountInput");
let itemToAddInput = document.getElementById("itemToAddInput");

let spliceBtn = document.getElementById("spliceBtn");

spliceBtn.onclick = function () {
  let startIndexValue = startIndexInput.value;
  let deleteCountValue = deleteCountInput.value;
  let itemToAddValue = itemToAddInput.value;

  if (startIndexValue !== "") {
    arr.splice(startIndexValue, deleteCountValue, itemToAddValue);
    updatedArray.textContent = "[" + arr + "]";
  }
};
