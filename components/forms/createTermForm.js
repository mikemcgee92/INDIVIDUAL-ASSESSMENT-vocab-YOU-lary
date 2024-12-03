import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const createTermForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-term--${obj.firebaseKey}` : 'submit-term'}">
      <div class="mb-3">
        <label for="term-word" class="form-label">Term</label>
        <input type="text" class="form-control" id="term-word" aria-describedby="termWord" placeholder="Enter a term to define" value="${obj.word || ''}" required>
      </div>
      <div class="mb-3">
        <label for="term-definition" class="form-label">Definition</label>
        <input type="text" class="form-control" id="term-definition" aria-describedby="termDefinition" placeholder="Enter the definition" value="${obj.definition || ''}" required>
      </div>
      <div id="select-category">
        <label for ="category-select">Select a category</label>
        <select class="form-control" id="category-select" required>
          <option value="">Select a category</option>
          <option value="javascript" ${obj.category === 'javascript' ? 'selected' : ''}>Javascript</option>
          <option value="html" ${obj.category === 'html' ? 'selected' : ''}>HTML</option>
          <option value="css" ${obj.category === 'css' ? 'selected' : ''}>CSS</option>
          <option value="webdev" ${obj.category === 'webdev' ? 'selected' : ''}>Web Development</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary" id="submit-term">Submit</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default createTermForm;
