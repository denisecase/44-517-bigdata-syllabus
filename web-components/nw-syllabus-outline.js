class nwSyllabusOutline extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <h2>Course Outline</h2>

    <p>The course is divided into seven content modules.</p>

    <table class="table table-bordered">
      <tr>
        <th >Module</th>
        <th >Days</th>
        <th >Topics</th>
      </tr>
      <tr>
        <td >1</td>
        <td >1-2</td>
        <td class="tg-031e">
          Course intro, big data, shell processing
        </td>
      </tr>
      <tr>
        <td >2</td>
        <td >3-4</td>
        <td class="tg-031e">
          Hadoop (HDFS + MapReduce), ecosystem, Pig, Hive, Impala, Hue
        </td>
      </tr>
      <tr>
        <td >3</td>
        <td >5-6</td>
        <td class="tg-031e">
          ZooKeeper, Kafka, Java apps
        </td>
      </tr>
      <tr>
        <td >4</td>
        <td >7-8</td>
        <td class="tg-031e">Python, map-reduce, architecture</td>
      </tr>
      <tr>
        <td >5</td>
        <td >9-10</td>
        <td class="tg-031e">Apache Spark</td>
      </tr>
      <tr>
        <td class="tg-yw4l">6</td>
        <td >11-12</td>
        <td class="tg-yw4l">
          Demonstrations and peer review
        </td>
      </tr>
      <tr>
        <td class="tg-yw4l">7</td>
        <td >13-14</td>
        <td class="tg-yw4l">
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
