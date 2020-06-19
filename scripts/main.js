$(() => {
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

  const btnClear = $('#reset');
  const btnCount = $('#count');
  const inputElement = $('#keyword');

  btnClear.on('click', () => {
    inputElement.val('').focus();
    found.unmark();
  });

  const mark = () => {
    const searchVal = $("input[name='keyword']").val();

    $('.context').unmark({
      done: () => {
        $('.context').mark(searchVal, {
          separateWordSearch: true,
          done: (count) => {
            btnCount.html(count.toString());
          },
        });
      },
    });
  };

  $("input[name='keyword']").on('input', mark);
});
