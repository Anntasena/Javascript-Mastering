//# IMPORT-----------------------------------
import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultView from "./views/resultView.js";
import "core-js/stable";
import "regenerator-runtime/runtime";

//# PARCEL SETUP -----------------------------
// This code not from JS, its form parcel to make not refresh after changing code
if (module.hot) {
  module.hot.accept();
}

//# SELECTOR & CONTAINER---------------------
// Controller file dont need DOM

//# CONTROLLER FUNCTION-----------------------
//= Control recipe function
const controlRecipes = async function () {
  try {
    // change hash URL
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1. LOADING RECIPE
    await model.loadRecipe(id);

    // 2. RENDERING RECIPE
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

//= Control search result function
const controlSearchResult = async function () {
  try {
    resultView.renderSpinner();
    console.log(recipeView);

    // 1. GET SEARCH QUERY
    const query = searchView.getQuery();
    if (!query) return;

    // 2. LOAD SEARCH RESULTS
    await model.loadSearchResults(query);

    // 3. RENDER RESULTS
    resultView.render(model.state.search.result);
  } catch (error) {
    console.log(error);
  }
};

//= Initial function
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResult);
};
init();
