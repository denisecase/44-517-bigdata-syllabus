class nwSyllabusFooter extends HTMLElement {
  constructor() {
    super();

    let siteURL = 'site';
    let sourceURL = 'source';

    fetch('./data/footer.json')
      .then((response) => response.json())
      .then((data) => {
        siteURL = data.siteURL;
        sourceURL = data.sourceURL;
      });

    this.innerHTML = `
    <!-- Sticky footer with padding (py level 3) on y-axis (top and bottom) -->

  <footer class="footer bg-light py-3 text-center">
    <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/denisecase/">Denise Case
    </a>
    &nbsp; &#9670; &nbsp;
    <a target="_blank" rel="noopener" href=${siteURL}>Site</a>
    &nbsp; &#9670; &nbsp;
    <a target="_blank" rel="noopener" href=${sourceURL}>Source</a>
  </footer>
    `;
  }
}

window.customElements.define('nw-syllabus-footer', nwSyllabusFooter);
