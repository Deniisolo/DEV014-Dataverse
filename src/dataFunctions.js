// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
export const filterData = (data, filterBy, value) => {
  
  return data.filter(singer => singer.facts[filterBy] === value);
 
};

// export const anotherExample = () => {
//   return [];
// };
