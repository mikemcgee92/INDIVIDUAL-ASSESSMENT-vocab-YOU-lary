import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import { getTerms } from '../api/termsData';
import { showTerms } from '../pages/terms';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();

  getTerms(user.uid).then((terms) => showTerms(terms));
};

export default startApp;
