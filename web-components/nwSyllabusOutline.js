
class nwSyllabusOutline extends HTMLElement {
  constructor () {
    super ()
    this.innerHTML = `
    <h2>Course Outline</h2>

    <p>The course is divided into seven content modules.</p>

    <table class="tg">
      <tr>
        <th class="tg-5mgg">Module</th>
        <th class="tg-5mgg">Days</th>
        <th class="tg-5mgg">Topics</th>
      </tr>
      <tr>
        <td class="tg-s268">1</td>
        <td class="tg-s268">1-2</td>
        <td class="tg-031e">
          Course intro, big data, shell processing
        </td>
      </tr>
      <tr>
        <td class="tg-s268">2</td>
        <td class="tg-s268">3-4</td>
        <td class="tg-031e">
          Hadoop (HDFS + MapReduce), ecosystem, Pig, Hive, Impala, Hue
        </td>
      </tr>
      <tr>
        <td class="tg-s268">3</td>
        <td class="tg-s268">5-6</td>
        <td class="tg-031e">
          ZooKeeper, Kafka, Java apps
        </td>
      </tr>
      <tr>
        <td class="tg-s268">4</td>
        <td class="tg-s268">7-8</td>
        <td class="tg-031e">Python, map-reduce, architecture</td>
      </tr>
      <tr>
        <td class="tg-s268">5</td>
        <td class="tg-s268">9-10</td>
        <td class="tg-031e">Apache Spark</td>
      </tr>
      <tr>
        <td class="tg-yw4l">6</td>
        <td class="tg-s268">11-12</td>
        <td class="tg-yw4l">
          Demonstrations and peer review
        </td>
      </tr>
      <tr>
        <td class="tg-yw4l">7</td>
        <td class="tg-s268">13-14</td>
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

    
    
    `
  }
}

window.customElements.define('nw-syllabus-outline', nwSyllabusOutline)

