//# IMPORT-----------------------------------
import View from "./View";
import icons from "url:../../img/icons.svg";

//# CLASS------------------------------------
class ResultView extends View {
  //= Selector, container and private field
  _parentElement = document.querySelector(".results");
  _errorMessage = "No recipes from your input! please check again";
  _successMessage = "";

  //= Generate list recipe function
  _generateMarkup() {
    console.log(this._data);
    return this._data.map(this._generateMarkupPreview).join("");
  }

  //= Generate list recipe preview function
  _generateMarkupPreview(recipe) {
    const id = window.location.hash.slice(1);

    return `
    <li class="preview">
        <a class="preview__link ${
          recipe.id === id ? "preview__link--active" : ""
        }" href="#${recipe.id}">
          <figure class="preview__fig">
            <img src="${recipe.image}" alt="${recipe.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${recipe.title}</h4>
            <p class="preview__publisher">${recipe.publisher}</p>
          </div>
        </a>
    </li>
    `;
  }
}

export default new ResultView();
