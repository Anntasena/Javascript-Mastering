//# IMPORT-----------------------------------
import { API_URL, RES_PER_PAGE } from "./config.js";
import { getJSON } from "./helpers.js";

//# CONTANER / STATE-------------------------
export const state = {
  recipe: {},
  search: {
    query: "",
    result: [],
    page: 1,
    resultPerPage: RES_PER_PAGE,
  },
};

//# MODEL FUNCTION---------------------------
//= Load recipe function
export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    //@ Re-Format json data
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (error) {
    console.error(`${error} 💥💥`);
    throw error;
  }
};

//= Load recipe from searchbar function
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const { data } = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);

    state.search.result = data.recipes.map((recipe) => {
      return {
        id: recipe.id,
        image: recipe.image_url,
        publisher: recipe.publisher,
        title: recipe.title,
      };
    });
  } catch (error) {
    console.error(`${error} 💥💥`);
    throw error;
  }
};

export const getSearchResultPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultPerPage;
  const end = page * state.search.resultPerPage;
  return state.search.result.slice(start, end);
};
