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
        <p class="card-text">${item.category}</p>
      </div>`;
  });
  renderToDOM('#home', domString);
};

export { emptyTerms, showTerms };
