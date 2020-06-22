class nwSyllabusSchedule extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
   
  <h2>Course Schedule</h2>

  <p>The course spans 17 calendar weeks.</p>

  <table class="table table-bordered">
  <thead class="thead-dark">
    <tr class="d-flex">
      <th class="col-2 ">Wk</th>
      <th class="col-4 ">Start</th>
      <th class="col-6 ">Notes</th>
    </tr>
  </thead>
  <tr class="d-flex">
    <td class="col-2 ">1</td>
    <td class="col-4 ">Wed 8-19</td>
    <td class="col-6 ">Module 1 begins, assignments due first day</td>
  </tr>
  <tr class="d-flex">
  <td class="col-2 ">2</td>
  <td class="col-4 ">Mon 8-24</td>
  <td class="col-6 ">Module 1 continues</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">3</td>
<td class="col-4 ">Mon 8-31</td>
<td class="col-6 ">Module 1 continues</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">4</td>
<td class="col-4 ">Mon 9-7</td>
<td class="col-6 ">No class Monday, Module 2 begins</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">5</td>
<td class="col-4 ">Mon 9-14</td>
<td class="col-6 ">Module 2 continues</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">6</td>
<td class="col-4 ">Mon 9-21</td>
<td class="col-6 ">Module 3 begins</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">7</td>
<td class="col-4 ">Mon 9-28</td>
<td class="col-6 ">Module 3 continues</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">8</td>
<td class="col-4 ">Mon 10-5</td>
<td class="col-6 ">Module 4 begins, no class Friday (walkout)</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">9</td>
<td class="col-4 ">Mon 10-12</td>
<td class="col-6 ">Module 4 continues</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">10</td>
<td class="col-4 ">Mon 10-19</td>
<td class="col-6 ">Module 5 begins</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">11</td>
<td class="col-4 ">Mon 10-26</td>
<td class="col-6 ">Module 5 continues</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">12</td>
<td class="col-4 ">Mon 11-2</td>
<td class="col-6 ">Module 6 begins</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">13</td>
<td class="col-4 ">Mon 11-9</td>
<td class="col-6 ">Module 6 continues</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">14</td>
<td class="col-4 ">Mon 11-16</td>
<td class="col-6 ">Module 7 begins</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">15</td>
<td class="col-4 ">Mon 11-23</td>
<td class="col-6 ">Thanksgiving break (no class Wed-Thr-Fri)</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">16</td>
<td class="col-4 ">Mon 1-30</td>
<td class="col-6 ">Online prep week (no new content, no in-person classes)</td>
</tr>
<tr class="d-flex">
<td class="col-2 ">17</td>
<td class="col-4 ">Mon 12-7</td>
<td class="col-6 ">Online finals week (no late submissions)</td>
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

window.customElements.define('nw-syllabus-schedule', nwSyllabusSchedule);
