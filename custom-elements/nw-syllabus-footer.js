class nwSyllabusFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <!-- Sticky footer with padding (py level 3) on y-axis (top and bottom) -->

  <footer class="footer bg-light mx-0 py-3 text-center">
    <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/denisecase/">Denise Case
    </a>
    &nbsp; &#9670; &nbsp;
    <a target="_blank" rel="noopener" href=${this.getAttribute(
      'siteURL',
    )}>Site</a>
    &nbsp; &#9670; &nbsp;
    <a target="_blank" rel="noopener" href=${this.getAttribute(
      'sourceURL',
    )}>Source</a>
  </footer>
    `;
  }
}

window.customElements.define('nw-syllabus-footer', nwSyllabusFooter);
