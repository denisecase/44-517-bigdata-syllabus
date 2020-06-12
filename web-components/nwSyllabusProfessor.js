class nwSyllabusProfessor extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
<h2>Course Professor</h2>

Dr. Denise Case
<br />
Assistant Professor <br />
660.562.1136
<br />
<a rel="noopener" target="_top" href="mailto:dcase@nwmissouri.edu?Subject=44-517">dcase@nwmissouri.edu</a>
<br />
<a rel="noopener" target="_blank"
  href="https://www.nwmissouri.edu/services/facility/pdf/floorplans/Colden%20Hall%202nd%20Floor.pdf">
  Colden Hall 2280</a>
<br />
<a href="https://docs.google.com/spreadsheets/d/1dGFW0ybTrUKMN6U4vu8I9G9efUE1ZJz8ktDyOTJTOA0/edit?usp=sharing">Office
  Hours Link</a><br />
MTWH noon to 1PM<br />
`
  }
}

window.customElements.define('nw-syllabus-professor',nwSyllabusProfessor)