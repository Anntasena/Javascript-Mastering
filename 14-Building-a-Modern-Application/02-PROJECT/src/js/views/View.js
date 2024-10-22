//# IMPORT-----------------------------------
import icons from "url:../../img/icons.svg";

//# CLASS------------------------------------
export default class View {
  //= Selector, container and private field
  _data;

  //= Render function
  render(data) {
    // Checking and validaating input serchbar
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  //= Clear content function
  _clear() {
    // console.log(this._parentElement);
    this._parentElement.innerHTML = "";
  }

  //= Render loading spinner function
  renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}.svg#icon-loader"></use>
        </svg>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  //= Render error message function
  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
          <div>
            <svg>
              <use href="${icons}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  //= Render success message function
  renderMessage(message = this._successMessage) {
    const markup = `
      <div class="message">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}