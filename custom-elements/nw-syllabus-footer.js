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
    <a class="btn btn-light btn-sm" href=${this.getAttribute(
      'sourceURL',
    )} target="_blank" rel="nofollow" role="button"><i class="fas fa-star"></i> Star us on github<i class="fab fa-github ml-1"></i></a>
  </footer>

    `;
  }
}

window.customElements.define('nw-syllabus-footer', nwSyllabusFooter);
