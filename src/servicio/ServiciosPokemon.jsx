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

export const submitForm = async (infoSolicitud) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(infoSolicitud),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
