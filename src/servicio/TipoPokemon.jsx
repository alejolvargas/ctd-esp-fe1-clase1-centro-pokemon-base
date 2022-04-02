const urlTipoPokemon = "https://pokeapi.co/api/v2/type/";
export const obtenerTipoPokemon = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/type/");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
