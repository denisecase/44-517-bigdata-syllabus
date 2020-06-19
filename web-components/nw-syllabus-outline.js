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
        <th class="col-3 ">Weeks</th>
        <th class="col-6 ">Topics</th>
      </tr>
      </thead>
      <tr class="d-flex">
        <td class="col-3 ">1</td>
        <td class="col-3 ">1-2</td>
        <td class="col-6 ">
          Course intro, big data, shell processing
        </td>
      </tr>
      <tr class="d-flex">
        <td class="col-3 ">2</td>
        <td class="col-3 ">3-4</td>
        <td class="col-6 ">
          Hadoop (HDFS + MapReduce), ecosystem, Pig, Hive, Impala, Hue
        </td>
      </tr>
      <tr class="d-flex">
        <td class="col-3 ">3</td>
        <td class="col-3 ">5-6</td>
        <td class="col-6 ">
          ZooKeeper, Kafka, Java apps
        </td>
      </tr>
      <tr class="d-flex">
        <td class="col-3 ">4</td>
        <td class="col-3 ">7-8</td>
        <td class="col-6 ">Python, map-reduce, architecture</td>
      </tr>
      <tr class="d-flex">
        <td class="col-3 ">5</td>
        <td class="col-3 ">9-10</td>
        <td class="col-6 ">Apache Spark</td>
      </tr>
      <tr class="d-flex">
        <td class="col-3 ">6</td>
        <td class="col-3 ">11-12</td>
        <td class="col-6 ">
          Demonstrations and peer review
        </td>
      </tr>
      <tr class="d-flex">
        <td class="col-3 ">7</td>
        <td class="col-3 ">13-14</td>
        <td class="col-6 ">
          Optional certifications or Splunk, final reflection
        </td>
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
