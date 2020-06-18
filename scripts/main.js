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
