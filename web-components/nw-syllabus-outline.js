class nwSyllabusOutline extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <h2>Course Outline</h2>

    <p>The course is divided into seven content modules.</p>

    <table class="table table-bordered">
    <thead class="thead-dark">
      <tr class="d-flex">
        <th class="col-3 ">Module</th>
        <th class="col-9 ">Content</th>
      </tr>
    </thead>
    <tr class="d-flex">
      <td class="col-3 ">1</td>
      <td class="col-9 "> ${this.getAttribute('mod1')} </td>
    </tr>
    <tr class="d-flex">
      <td class="col-3 ">2</td>
      <td class="col-9 "> ${this.getAttribute('mod2')} </td>
    </tr>
    <tr class="d-flex">
      <td class="col-3 ">3</td>
      <td class="col-9 "> ${this.getAttribute('mod3')} </td>
    </tr>
    <tr class="d-flex">
      <td class="col-3 ">4</td>
      <td class="col-9 "> ${this.getAttribute('mod4')} </td>
    </tr>
    <tr class="d-flex">
      <td class="col-3 ">5</td>
      <td class="col-9 "> ${this.getAttribute('mod5')} </td>
    </tr>
    <tr class="d-flex">
      <td class="col-3 ">6</td>
      <td class="col-9 "> ${this.getAttribute('mod6')} </td>
    </tr>
    <tr class="d-flex">
      <td class="col-3 ">7</td>
      <td class="col-9 "> ${this.getAttribute('mod7')} </td>
    </tr>
  </table>

    <h3>Schedule Subject to Change</h3>

    The schedule is subject to change with instructor notification and
    students will be responsible for abiding by these changes.

    <h3>Schedule Links</h3>

    <ul class="text-left">
      <li class="tap-target-li">
        <a target="_blank" rel="noopener" href="https://www.nwmissouri.edu/academics/calendar.htm">Academic
          Calendar</a>
      </li>
      <li class="tap-target-li">
        <a target="_blank" rel="noopener" href="https://www.nwmissouri.edu/registrar/finals.htm">Final Exams
          Schedule</a>
      </li>
      <li class="tap-target-li">
        <a target="_blank" rel="noopener" href="http://calendar.nwmissouri.edu/">University Events</a>
      </li>
    </ul>

    
    
    `;
  }
}

window.customElements.define('nw-syllabus-outline', nwSyllabusOutline);
