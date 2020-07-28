/**
 * Code for working with search features in the interactive syllabus.
 * @name case-syllabus
 * @author Denise Case
 * @requires @https://markjs.io/
 */

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
