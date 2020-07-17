class nwSyllabusGradeScaleStandard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <p>Grading scale</p>

    <table class="tg">
      <tr>
        <th>Credit</th>
        <th></th>
      </tr>
      <tr>
        <td>Percent Range</td>
        <td>Grade</td>
      </tr>
      <tr>
        <td>90-100%</td>
        <td>A</td>
      </tr>
      <tr>
        <td>&gt;= 80% and &lt; 90%</td>
        <td>B</td>
      </tr>
      <tr>
        <td>&gt;= 70% and &lt; 80%</td>
        <td>C</td>
      </tr>
      <tr>
        <td>&gt;= 60% and &lt; 70%</td>
        <td>D</td>
      </tr>
      <tr>
        <td>below 60%</td>
        <td>F</td>
      </tr>
    </table>
  
    `;
  }
}

window.customElements.define(
  'nw-syllabus-grade-scale-standard',
  nwSyllabusGradeScaleStandard,
);
