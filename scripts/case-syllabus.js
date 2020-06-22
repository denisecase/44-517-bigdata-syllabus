/**
 * Code for working with interactive syllabus.
 * @name case-syllabus
 * @author Denise Case
 * @requires @https://markjs.io/
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

const btnClear = document.querySelector('#reset');
const btnCount = document.querySelector('#count');
const inputElement = document.querySelector('#keyword');

btnClear.addEventListener('click', () => {
  inputElement.value = ' ';
  inputElement.focus();
  found.unmark();
});

const mark = () => {
  const searchVal = document.querySelector("input[name='keyword']").value;
  const context = document.querySelector('.context');
  // eslint-disable-next-line no-undef
  const instance = new Mark(context);
  instance.unmark({
    done: () => {
      instance.mark(searchVal, {
        separateWordSearch: true,
        done: (count) => {
          btnCount.html(count.toString());
        },
      });
    },
  });
};

document.querySelector("input[name='keyword']").addEventListener('input', mark);
