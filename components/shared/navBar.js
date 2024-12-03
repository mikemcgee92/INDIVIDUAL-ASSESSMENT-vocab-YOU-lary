import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">vocabYOUlary</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="all-terms">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="javascript-terms">Javascript</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="html-terms">HTML</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="css-terms">CSS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="webdev-terms">Web Development</a>
            </li>
            <li class="nav-item">
              <button class="btn btn-outline-primary" id="add-term-btn">+ Add term</button>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search-input">
          </form>
          <span class="navbar-text">
            <div id="logout-button"></div>
          </span>
        </div>
      </div>
    </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
