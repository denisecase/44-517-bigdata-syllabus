class nwSyllabusProfessor extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <br>(<a rel="noopener" target="_blank"
    href=
    "https://www.nwmissouri.edu/services/facility/pdf/floorplans/Colden%20Hall%201st%20Floor.pdf"
    >map</a>)
    
<h2>Course Professor</h2>

Dr. Denise Case
<br />
Associate Professor <br />
660.562.1136
<br />
<a rel="noopener" target="_top" href=
"mailto:dcase@nwmissouri.edu?Subject=44-517">dcase@nwmissouri.edu</a>
<br />
<a rel="noopener" target="_blank"
  href=
  "https://www.nwmissouri.edu/services/facility/pdf/floorplans/Colden%20Hall%202nd%20Floor.pdf"
  >Colden Hall 2280</a>
  <br><br>
Office Hours
<a href=
"https://docs.google.com/spreadsheets/d/1dGFW0ybTrUKMN6U4vu8I9G9efUE1ZJz8ktDyOTJTOA0/edit?usp=sharing"
> (link)</a><br>
  MW 10-10:50 AM<br>
  MW 11-11:50 AM<br>
  MW 3-3:50 PM<br>
  M  4-4:50 PM<br>
`;
  }
}

window.customElements.define('nw-syllabus-professor', nwSyllabusProfessor);
