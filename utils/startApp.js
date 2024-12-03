import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import { getTerms } from '../api/termsData';
import { emptyTerms, showTerms } from '../pages/terms';
import navbarEvents from '../components/events/navbarEvents';
import formEvents from '../components/events/formEvents';
import domEvents from '../components/events/domEvents';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  navbarEvents(user);
  formEvents(user);
  domEvents(user);
  logoutButton();
  document.querySelector('#login-form-container').innerHTML = '';

  getTerms(user.uid).then((terms) => {
    if (terms.length > 0) {
      showTerms(terms);
    } else {
      emptyTerms();
    }
  });
};

export default startApp;
