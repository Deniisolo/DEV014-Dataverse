import { filterData } from "./dataFunctions.js";
import { sortData } from "./dataFunctions.js";
import { computeStats } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

renderItems(data);

//variables
const container = document.querySelector("#root");
const mainGenre = document.querySelector("#mainGenre");
const compute = document.getElementById("compute");
const changeCompute = document.getElementById("conteinerCompute");
changeCompute.style.display = "none";
const cleanButton = document.getElementById("buttonClear");
const sort = document.querySelector("#sort");
let filteredData;
let sortedData;
container.appendChild(renderItems(data));

//eventos
mainGenre.addEventListener("change", (e) => {
  const optionValue = e.target.value;
  filteredData = filterData(data, "mainGenre", optionValue);
  container.appendChild(renderItems(filteredData));
});

sort.addEventListener("change", (e) => {
  const optionSort = e.target.value;
  if (filteredData.length > 0) {
    sortedData = sortData(filteredData, "yearOfBirth", optionSort);
    container.appendChild(renderItems(sortedData));
  } else {
    sortedData = sortData(data, "yearOfBirth", optionSort);
    container.appendChild(renderItems(sortedData));
  }
});

compute.addEventListener("click", function () {
  const cumputeResult = computeStats(data);
  if (changeCompute.style.display === "none") {
    changeCompute.style.display = "block";
    changeCompute.innerHTML =
      "El  " +
      cumputeResult +
      "%" +
      "  de los cantantes en nuestra base de datos nacieron entre 1970 y 1990.";
  } else {
    changeCompute.style.display = "none";
  }
});

cleanButton.addEventListener("click", () => {
  container.appendChild(renderItems(data));
  changeCompute.innerHTML = "";
  mainGenre.options[0].selected = true;
  sort.options[0].selected = true;
  filteredData = [];
});
