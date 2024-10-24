//# IMPORT-----------------------------------
import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultView from "./views/resultView.js";
import paginationView from "./views/paginationView.js";
// import paginationView from "./views/paginationView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

//# PARCEL SETUP -----------------------------
// This code not from JS, its form parcel to make not refresh after changing code
// if (module.hot) {
//   module.hot.accept();
// }

//# SELECTOR & CONTAINER---------------------
// Controller file dont need DOM

//# CONTROLLER FUNCTION-----------------------
//= Control recipe function
const controlRecipes = async function () {
  try {
    // change hash URL
    const id = window.location.hash.slice(1);

    // 0. UPDATE RESULT VIEW TO MARK SELECTED SEARCH RESULT
    resultView.update(model.getSearchResultPage());

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
    // console.log(recipeView);

    // 1. GET SEARCH QUERY
    const query = searchView.getQuery();
    if (!query) return;

    // 2. LOAD SEARCH RESULTS
    await model.loadSearchResults(query);

    // 3. RENDER RESULTS
    // resultView.render(model.state.search.result);
    resultView.render(model.getSearchResultPage());

    // 4. RENDER INITIAL PAGINATION BUTTON
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};

//= Control pagination function
const controlPagination = function (gotToPage) {
  // 1. RENDER NEW RESULT
  resultView.render(model.getSearchResultPage(gotToPage));
  // 2. RENDER NEW PAGINATION BUTTON
  paginationView.render(model.state.search);
};

//= Control foods servings function
const controlServings = function (newServings) {
  // 1. UPDATE RECIPE SERVINGS (IN STATE)
  model.updateServings(newServings);

  // 2. UPDATE THE RECIPE VIEW
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

//= Initial function
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResult);
  paginationView.addHandlerClick(controlPagination);
  // controlServings();
};
init();
