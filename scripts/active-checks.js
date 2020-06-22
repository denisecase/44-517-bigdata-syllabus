/* eslint-disable no-param-reassign */
/**
 * See original at:
 * https://bootsnipp.com/snippets/featured/checked-list-group
 */

(() => {
  /** Iterate over all list-group-item elements */
  document
    .querySelectorAll('.requirement-li')
    // eslint-disable-next-line no-unused-vars
    .forEach((requirementListItem, index) => {
      const liClassChecked =
        'list-group-item list-group-item-action list-group-item-primary active';
      const liClassUnchecked = 'list-group-item list-group-item-action';
      const cbClassChecked = 'state-icon fa fa-check-square';
      const cbClassUnchecked = 'state-icon far fa-square';

      // create an init function & then call it as we load

      function init() {
        const newCheckBox = document.createElement('span');
        const isStoredAsChecked =
          localStorage.getItem(requirementListItem.id) ?? false;
        if (isStoredAsChecked) {
          requirementListItem.className = liClassChecked;
          newCheckBox.className = cbClassChecked;
        } else {
          requirementListItem.className = liClassUnchecked;
          newCheckBox.className = cbClassUnchecked;
        }
        requirementListItem.insertBefore(
          newCheckBox,
          requirementListItem.firstChild,
        );
      }
      init();

      requirementListItem.addEventListener('click', () => {
        const wasChecked =
          localStorage.getItem(requirementListItem.id) === 'true';
        const isNowChecked = !wasChecked;
        localStorage.setItem(requirementListItem.id, isNowChecked);
        if (isNowChecked === true) {
          requirementListItem.className = liClassChecked;
          requirementListItem.firstChild.className = cbClassChecked;
        } else {
          requirementListItem.className = liClassUnchecked;
          requirementListItem.firstChild.className = cbClassUnchecked;
        }
      });
    });
})();
