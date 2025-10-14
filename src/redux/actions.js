import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";

const LOCAL_HOST = "http://localhost:3003";

export function getPokemons() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3003/pokemon`);

      /*   const response = await axios.get(
        `    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150"
`
      ); */
      console.log("Response data:", response.data);
      dispatch({ type: GET_POKEMONS, payload: response.data });
    } catch (error) {
      console.log("Get all Pokemons:", error);
    }
  };
}
