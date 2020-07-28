/**
 * A custom HTML element class for a standard syllabus footer.
 * @class nwSyllabusFooter
 * @extends HTMLElement
 * @uses RegExp - replaces any character not matching the allowed characters (escapes the .)
 * @author Denise Case
 * @attribute {string} siteURL The web address (URL) of the interactive syllabus.
 * @attribute {string} sourceURL The web address (URL) of the source code repository.
 */
class nwSyllabusFooter extends HTMLElement {
  constructor() {
    super();
    const siteURL = this.getAttribute('siteURL').replace(
      /[^:/.a-zA-Z0-9-, ]/g,
      '',
    );
    const sourceURL = this.getAttribute('sourceURL').replace(
      /[^:/.a-zA-Z0-9-, ]/g,
      '',
    );
    this.innerHTML = `
    <!-- Sticky footer with padding (py level 3) on y-axis (top and bottom) -->

  <footer class="footer bg-light mx-0 py-3 text-center">
    <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/denisecase/">Denise Case</a>
    &nbsp; &#9670; &nbsp;
    <a target="_blank" rel="noopener" href=${siteURL}>Site</a>
    &nbsp; &#9670; &nbsp;
    <a class="btn btn-light btn-sm" href=${sourceURL} target="_blank" rel="noopener" role="button">
    <i class="fas fa-star"></i>   Source code on GitHub <i class="fab fa-github ml-1"></i></a>
  </footer>
    `;
  }
}

window.customElements.define('nw-syllabus-footer', nwSyllabusFooter);
