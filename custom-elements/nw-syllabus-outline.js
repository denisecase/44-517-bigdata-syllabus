// import default object with a local camelCase name
import initOutline from '../init-outline.js';

export default class nwSyllabusOutline extends HTMLElement {
  constructor() {
    super();

    // console.error('data - before : ', JSON.stringify(initOutline));

    const cleanDataObject = Object.fromEntries(
      Object.entries(initOutline).map(([k, v]) => [
        k,
        v.replace(/[^a-zA-Z0-9-, ]/g, ''),
      ]),
    );

    // console.error('data - after : ', JSON.stringify(cleanDataObject));

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
      <td class="col-9 "> ${cleanDataObject.mod1} </td>
    </tr>
    <tr class="d-flex">
      <td class="col-3 ">2</td>
      <td class="col-9 "> ${cleanDataObject.mod2} </td>
    </tr>
    <tr class="d-flex">
      <td class="col-3 ">3</td>
      <td class="col-9 "> ${cleanDataObject.mod3} </td>
    </tr>
    <tr class="d-flex">
      <td class="col-3 ">4</td>
      <td class="col-9 "> ${cleanDataObject.mod4} </td>
    </tr>
    <tr class="d-flex">
      <td class="col-3 ">5</td>
      <td class="col-9 "> ${cleanDataObject.mod5} </td>
    </tr>
    <tr class="d-flex">
      <td class="col-3 ">6</td>
      <td class="col-9 "> ${cleanDataObject.mod6} </td>
    </tr>
    <tr class="d-flex">
      <td class="col-3 ">7</td>
      <td class="col-9 "> ${cleanDataObject.mod7} </td>
    </tr>
  </table>
  <br>
    `;
  }
}

window.customElements.define('nw-syllabus-modules-outline', nwSyllabusOutline);
