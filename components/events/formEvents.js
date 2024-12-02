import { createTerm, getTerms, updateTerm } from '../../api/termsData';
import { showTerms } from '../../pages/terms';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-term')) {
      const payload = {
        word: document.querySelector('#term-word').value,
        definition: document.querySelector('#term-definition').value,
        category: document.querySelector('#category-select').value,
        public: true,
        uid: user.uid
      };

      createTerm(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateTerm(patchPayload).then(() => {
          getTerms(user.uid).then(showTerms);
        });
      });
    }

    if (e.target.id.includes('update-term')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        word: document.querySelector('#term-word').value,
        definition: document.querySelector('#term-definition').value,
        category: document.querySelector('#category-select').value,
        public: true,
        uid: user.uid,
        firebaseKey,
      };

      updateTerm(payload).then(() => {
        getTerms(user.uid).then(showTerms);
      });
    }
  });
};

export default formEvents;
