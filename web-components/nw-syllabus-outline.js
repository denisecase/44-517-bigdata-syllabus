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

  <br>

  <h2>Course Schedule</h2>

  <p>The course spans 17 calendar weeks.</p>

  <table class="table table-bordered">
  <thead class="thead-dark">
    <tr class="d-flex">
      <th class="col-2 ">Week</th>
      <th class="col-2 ">Start</th>
      <th class="col-6 ">Notes</th>
      <th class="col-2 ">See</th>
    </tr>
  </thead>
  <tr class="d-flex">
    <td class="col-2 ">1</td>
    <td class="col-2 ">Wed 8-19</td>
    <td class="col-6 ">Module 1 begins, assignments due first day</td>
    <td class="col-2 ">Engage 01</td>
  </tr>
  <tr class="d-flex">
  <td class="col-2 ">2</td>
  <td class="col-2 ">Mon 8-24</td>
  <td class="col-6 ">Module 1 continues</td>
  <td class="col-2 "></td>
</tr>
<tr class="d-flex">
<td class="col-2 ">3</td>
<td class="col-2 ">Mon 8-31</td>
<td class="col-6 ">Module 1 continues</td>
<td class="col-2 "></td>
</tr>
<tr class="d-flex">
<td class="col-2 ">4</td>
<td class="col-2 ">Mon 9-7</td>
<td class="col-6 ">No class Monday, Module 2 begins</td>
<td class="col-2 ">Engage 02</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">5</td>
<td class="col-2 ">Mon 9-14</td>
<td class="col-6 ">Module 2 continues</td>
<td class="col-2 "></td>
</tr>
<tr class="d-flex">
<td class="col-2 ">6</td>
<td class="col-2 ">Mon 9-21</td>
<td class="col-6 ">Module 3 begins</td>
<td class="col-2 ">Engage 03</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">7</td>
<td class="col-2 ">Mon 9-28</td>
<td class="col-6 ">Module 3 continues</td>
<td class="col-2 "></td>
</tr>
<tr class="d-flex">
<td class="col-2 ">8</td>
<td class="col-2 ">Mon 10-5</td>
<td class="col-6 ">Module 4 begins, no class Friday (walkout)</td>
<td class="col-2 ">Engage 04</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">9</td>
<td class="col-2 ">Mon 10-12</td>
<td class="col-6 ">Module 4 continues</td>
<td class="col-2 "></td>
</tr>
<tr class="d-flex">
<td class="col-2 ">10</td>
<td class="col-2 ">Mon 10-19</td>
<td class="col-6 ">Module 5 begins</td>
<td class="col-2 ">Engage 05</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">11</td>
<td class="col-2 ">Mon 10-26</td>
<td class="col-6 ">Module 5 continues</td>
<td class="col-2 "></td>
</tr>
<tr class="d-flex">
<td class="col-2 ">12</td>
<td class="col-2 ">Mon 11-2</td>
<td class="col-6 ">Module 6 begins</td>
<td class="col-2 ">Engage 06</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">13</td>
<td class="col-2 ">Mon 11-9</td>
<td class="col-6 ">Module 6 continues</td>
<td class="col-2 "></td>
</tr>
<tr class="d-flex">
<td class="col-2 ">14</td>
<td class="col-2 ">Mon 11-16</td>
<td class="col-6 ">Module 7 begins</td>
<td class="col-2 ">Engage 07</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">15</td>
<td class="col-2 ">Mon 11-23</td>
<td class="col-6 ">Thanksgiving break (no class)</td>
<td class="col-2 "></td>
</tr>
<tr class="d-flex">
<td class="col-2 ">16</td>
<td class="col-2 ">Mon 1-30</td>
<td class="col-6 ">Prep week (no new content)</td>
<td class="col-2 "></td>
</tr>
<tr class="d-flex">
<td class="col-2 ">17</td>
<td class="col-2 ">Mon 12-7</td>
<td class="col-6 ">Finals week (no late submissions)</td>
<td class="col-2 "></td>
</tr>

</table>

<br>

    <h3>Schedule Subject to Change</h3>

    <p>The schedule is subject to change with instructor notification and
    students will be responsible for abiding by these changes.</p>
    <br>

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
