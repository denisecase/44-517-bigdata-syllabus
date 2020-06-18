$(() => {
  const btnClear = $('#reset');
  const btnCount = $('#count');
  const inputElement = $('#keyword');

  btnClear.on('click', () => {
    inputElement.val('').focus();
    found.unmark();
  });

  const mark = () => {
    const searchVal = $("input[name='keyword']").val();

    document.querySelectorAll('.context').unmark({
      done: () => {
        document.querySelectorAll('.context').mark(searchVal, {
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
