//# IMPORT-----------------------------------
import View from "./View";
import icons from "url:../../img/icons.svg";

//# CLASS------------------------------------
class PreviewView extends View {
  //= Selector, container and private field
  _parentElement = "";

  //= Generate preview markup function
  _generateMarkup() {
    const id = window.location.hash.slice(1);

    return `
    <li class="preview">
        <a class="preview__link ${
          this._data.id === id ? "preview__link--active" : ""
        }" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
          </div>
        </a>
    </li>
    `;
  }
}

export default new PreviewView();
