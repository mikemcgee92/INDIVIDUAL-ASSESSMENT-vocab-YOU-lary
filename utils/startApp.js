import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import { getTerms } from '../api/termsData';
import { showTerms } from '../pages/terms';
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

  getTerms(user.uid).then((terms) => showTerms(terms));
};

export default startApp;
