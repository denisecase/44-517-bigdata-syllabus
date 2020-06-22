/**
 * Code for working with interactive syllabus.
 * @name case-syllabus
 * @author Denise Case
 * @requires @https://markjs.io/
 * @uses SpeechSynthesisUtterance
 */

document.querySelector('#sap-icon').addEventListener('click', () => {
  const heading = document.querySelector('#sap-head').innerHTML;
  const content = document.querySelector('#sap-content').innerHTML;
  const utterance1 = new SpeechSynthesisUtterance();
  const utterance2 = new SpeechSynthesisUtterance();
  utterance1.text = heading;
  utterance2.text = content;
  window.speechSynthesis.speak(utterance1);
  window.speechSynthesis.speak(utterance2);
});

document.querySelector('#reset').addEventListener('click', () => {
  document.querySelector('#keyword').value = '';
  document.querySelector('#keyword').focus();
  const context = document.querySelector('.context');
  // eslint-disable-next-line no-undef
  const markInstance = new Mark(context);
  markInstance.unmark();
});

document
  .querySelector("input[name='keyword']")
  .addEventListener('input', () => {
    const searchVal = document.querySelector("input[name='keyword']").value;
    const context = document.querySelector('.context');
    // eslint-disable-next-line no-undef
    const markInstance = new Mark(context);
    markInstance.unmark({
      done: () => {
        markInstance.mark(searchVal, {
          separateWordSearch: true,
          done: (count) => {
            document.querySelector('#count').innerHTML = count.toString();
          },
        });
      },
    });
  });
