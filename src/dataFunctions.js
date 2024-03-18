// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
export const filterData = (data, filterBy, value) => {
  return data.filter((singer) => singer.facts[filterBy] === value);
};
export const sortData = (data, sortBy, sortOrder) => {
  const clonedData = data.map(card => ({ ...card }));

  if (sortOrder === "asc") {
    return clonedData.sort(
      (cardOne, cardTwo) => cardOne.facts[sortBy] - cardTwo.facts[sortBy]
    );
  } else {
    return clonedData.sort(
      (cardTwo, cardOne) => cardOne.facts[sortBy] - cardTwo.facts[sortBy]
    );
  }
};