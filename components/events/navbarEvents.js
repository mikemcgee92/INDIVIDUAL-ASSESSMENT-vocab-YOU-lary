import { filterTerms, getTerms } from '../../api/termsData';
import { showTerms, emptyTerms } from '../../pages/terms';
import { signOut } from '../../utils/auth';
import createTermForm from '../forms/createTermForm';

// navigation events
const navbarEvents = (user) => {
  // logout button
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // show all terms
  document.querySelector('#all-terms')
    .addEventListener('click', () => {
      getTerms(user.uid).then((result) => {
        if (result.length > 0) {
          showTerms(result);
        } else {
          emptyTerms();
        }
      });
    });

  // show html terms only
  document.querySelector('#html-terms')
    .addEventListener('click', () => {
      filterTerms(user.uid, 'html').then((result) => {
        if (result.length > 0) {
          showTerms(result);
        } else {
          emptyTerms();
        }
      });
    });

  // show javascript terms only
  document.querySelector('#javascript-terms')
    .addEventListener('click', () => {
      filterTerms(user.uid, 'javascript').then((result) => {
        if (result.length > 0) {
          showTerms(result);
        } else {
          emptyTerms();
        }
      });
    });

  // show css terms only
  document.querySelector('#css-terms')
    .addEventListener('click', () => {
      filterTerms(user.uid, 'css').then((result) => {
        if (result.length > 0) {
          showTerms(result);
        } else {
          emptyTerms();
        }
      });
    });

  // show webdev terms only
  document.querySelector('#webdev-terms')
    .addEventListener('click', () => {
      filterTerms(user.uid, 'webdev').then((result) => {
        if (result.length > 0) {
          showTerms(result);
        } else {
          emptyTerms();
        }
      });
    });

  // show the form to add a term
  document.querySelector('#add-term-btn')
    .addEventListener('click', () => {
      createTermForm(user.uid);
    });
};

export default navbarEvents;
