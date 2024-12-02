import { deleteTerm, getSingleTerm, getTerms } from '../../api/termsData';
import { showTerms } from '../../pages/terms';
import createTermForm from '../forms/createTermForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-term-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      deleteTerm(firebaseKey).then(() => {
        getTerms(user.uid).then(showTerms);
      });
    }

    if (e.target.id.includes('edit-term-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleTerm(firebaseKey).then((termObj) => createTermForm(user.uid, termObj));
    }
  });
};

export default domEvents;
