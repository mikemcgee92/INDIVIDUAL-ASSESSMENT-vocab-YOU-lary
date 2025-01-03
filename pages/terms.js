import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyTerms = () => {
  const domString = '<h1>No vocabulary terms</h1>';
  renderToDOM('#home', domString);
};

const showTerms = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <h5 class="card-title">${item.word}</h5>
        <p class="card-text bold">${item.definition}</p>
        <p class="card-text-category">${item.category}</p>
        <div class="btn-container">
          <button type="button" class="btn btn-outline-info" id="edit-term-btn--${item.firebaseKey}">edit</button>
          <button type="button" class="btn btn-outline-danger" id="delete-term-btn--${item.firebaseKey}">X</button>
        </div>
      </div>`;
  });
  renderToDOM('#home', domString);
};

export { emptyTerms, showTerms };
