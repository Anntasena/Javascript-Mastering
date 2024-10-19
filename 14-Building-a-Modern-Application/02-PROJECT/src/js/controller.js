//# IMPORT-----------------------------------
import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import "core-js/stable";
import "regenerator-runtime/runtime";
import recipeView from "./views/recipeView.js";

//# SELECTOR & CONTAINER---------------------
// const recipeContainer = document.querySelector(".recipe");

// https://forkify-api.herokuapp.com/v2
//! /////////////////////////////////////
//? /////////////////////////////////////
//$ /////////////////////////////////////
//* /////////////////////////////////////

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
    alert(error);
  }
};

//# EVENT HANDLER----------------------------
//= event handler for control recipe (hashchange, load)
["hashchange", "load"].forEach((ev) =>
  window.addEventListener(ev, controlRecipes)
);
// window.addEventListener("hashchange", showRecipe);
// window.addEventListener("load", showRecipe);
