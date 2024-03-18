import { filterData } from "./dataFunctions.js";
import { sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

// console.log(example, renderItems(data), data);

renderItems(data);

//variables
const container = document.querySelector("#root");
const mainGenre = document.querySelector("#mainGenre");
const sort = document.querySelector("#sort");

container.appendChild(renderItems(data));

//eventos
mainGenre.addEventListener("change", (e) => {
  const optionValue = e.target.value;
  const filterResult = filterData(data, "mainGenre", optionValue);
  container.appendChild(renderItems(filterResult));

  sort.addEventListener("change", (e) => {
    const optionSort = e.target.value;
    const sortResult = sortData(filterResult, "yearOfBirth", optionSort);
    container.appendChild(renderItems(sortResult));
  });
});
sort.addEventListener("change", (e) => {
  const optionSort = e.target.value;
  const sortResult = sortData(data, "yearOfBirth", optionSort);
  container.appendChild(renderItems(sortResult));
});