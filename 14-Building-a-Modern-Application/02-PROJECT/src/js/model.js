//# IMPORT-----------------------------------
import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

//# CONTANER / STATE-------------------------
export const state = {
  recipe: {},
};

//# MODEL FUNCTION---------------------------
//= Load recipe function
export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);
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
  }
};
