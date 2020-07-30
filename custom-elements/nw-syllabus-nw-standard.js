/**
 * A custom HTML element class to display standard university syllabus components.
 * @class nwSyllabusNWStandard
 * @extends HTMLElement
 * @author Denise Case
 * @uses SpeechSynthesisUtterance
 */
class nwSyllabusNWStandard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <!-- Standard University -->

      <h2>Grade of Incomplete (I)</h2>

      Following Northwest Missouri State University policy, incomplete grades
      may only be given in extreme circumstances, such as illness, death in a
      student's immediate family, or similar circumstances beyond a student's
      control, and the student was unable to complete a significant portion of
      the course work.

      <h2>University Attendance Recommendations</h2>

      Students are expected to attend all classes as specified in the 
      course syllabi for each course. 
      It is the responsibility of the student to promptly notify 
      their instructor when unable to attend class. 
      Students receiving veterans' benefits should consult with the 
      coordinator of Veterans' Affairs 
      for the additional attendance requirements.
      
      Please review the 
      <a rel="noopener" target="_blank" href=
      "https://www.nwmissouri.edu/policies/academics/Attendance.pdf">
      university policy on attendance</a>.

      <h2>Excused Absences</h2>

      Excused absences include attendance at a university sponsored event
      (documented with an excuse signed by the university sponsor prior to the
      event) or by circumstances considered extenuating by the course
      instructor. A student may make up class work without penalty for excused
      absences.

      <h2>Final Exams</h2>

      If an emergency occurs that prevents the administration of a course
      scheduled final examination, the final course grades will be calculated
      based on the work in the course completed to that point in time and the
      faculty member's considered judgment. Final exams will not be
      rescheduled, and a grade of “I” will not be given as a result of an
      institutional cancellation of a final examination.

      <h2>Administrative Drop</h2>

      An instructor may request the Office of the Registrar delete a student
      from a course roster if the student has not met the prerequisite for the
      course as stated in the catalog, or as a result of non-attendance in the
      course.

      <h2>Academic Administrative Withdrawal</h2>
      
      When it is in the best interest of Northwest Missouri State University 
      for a student to withdraw, 
      a student will be given a W, 
      put on administrative hold, 
      and given notice that they are about to be withdrawn. 
      This action will result in removal of all credits associated with courses 
      that have yet to be completed in the semester in question 
      and the student will be administratively withdrawn from the University. 
      An Administrative Withdrawal does not affect 
      the student’s grade point average. 
      Please refer to Northwest Missouri State University’s 
      <a rel="noopener" target="_blank" href=
      "https://www.nwmissouri.edu/policies/academics/Adding-Dropping-Withdrawals.pdf">
      Academic Administrative Withdrawal Policy
      </a>.

      <h2>Course Access</h2>

      Course content is provided via Canvas and Northwest Online. Access to
      Northwest Online is at
      <a rel="noopener" href="https://nwmissouri.instructure.com/">
      https://nwmissouri.instructure.com/
      </a>.

      <h2>University Communications</h2>

      Students are expected to use their Northwest student email account for
      any electronic correspondence within the university. 
      Students are also strongly advised to check their email 
      and CatPAWS accounts on a regular basis.

      <h2>Academic Integrity Policy</h2>

      The students, faculty, and staff at Northwest endeavor to sustain 
      an environment that values honesty in academic work, 
      that acknowledges the authorized aid provided by 
      and intellectual contributions of others, 
      and that enables equitable student evaluation. 
      Please refer to <a rel="noopener" target="_blank"
        href="http://www.nwmissouri.edu/policies/academics/Academic-Integrity.pdf">
      Northwest Missouri State University’s Academic Integrity Policy</a>.
      In addition, students are expected to understand and abide by the
      <a rel="noopener" target="_blank"
      href="http://www.nwmissouri.edu/csis/pdf/AcademicIntegrityCSI.doc">
      Computer Science and Information Systems Academic Integrity Policy
      </a>.
      This document explains types of behavior considered to constitute
      academic dishonesty. You are responsible for reading this document and
      abiding by the guidelines described therein.

      <h2 id="sap-head">Special Accommodations Policy <i 
      class="fas fa-volume-up" id="sap-icon"></i></h2> 

      <div id="sap-content">
      Northwest Missouri State University complies with 
      Section 504 of the Rehabilitation Act of 1973 and the 
      Americans with Disabilities Act of 1990 (ADA) and the 
      ADA Amendments Act of 2008 (ADAAA). 
      
      If a student has a disability that qualifies under ADA/ADAAA 
      and requires accommodations, they should contact 
      the accessibility office for information on 
      appropriate policies and procedures. 
      Disabilities covered by the ADA may include 
      learning, psychiatric, physical disabilities, or chronic health disorders.

      Students requiring special classroom accommodations 
      should meet with me during office hours so that we can discuss 
      how to meet your needs this semester. 
      Prior to our meeting be sure you have contacted 
      the Accessibility Coordinator in the 
      Title IX and Equity, Accessibility and Accommodations Office at 
      <a rel="noopener" target="_top" 
      href="mailto:ADA@nwmissouri.edu?Subject=Accomodations">
      ADA@nwmissouri.edu</a>. 
      
      More information can be found at the University 
      Title IX and Equity, Accessibility & Accommodations website at
      <a rel="noopener" href=
      "https://www.nwmissouri.edu/titleixequity/accessibility/index.htm">
      https://www.nwmissouri.edu/titleixequity/accessibility/index.htm
      </a>.
       
      If you have been approved for an accommodation, 
      if you have emergency medical information to share with me, 
      or if you need special arrangements 
      in case the building must be evacuated, please inform me immediately.

      </div>

      <h2>Non-Discrimination and Anti-Harrassment Policy</h2>

      Northwest Missouri State University is committed to maintaining an
      environment for all faculty, staff, students, and third parties that is
      free of illegal discrimination and harassment. 
      Please refer to the Non-Discrimination and Anti-Harassment Policy at 
      <a rel="noopener" target="_blank"
        href="http://www.nwmissouri.edu/diversity/titlevi.htm">
        http://www.nwmissouri.edu/diversity/titlevi.htm</a>.

      <h2>Family Educational Rights and Privacy Act (FERPA)</h2>

      Family Educational Rights and Privacy Act of 1974, 
      as amended (commonly known as the Buckley Amendment), 
      is a federal law which provides that
      colleges and universities will maintain the confidentiality of student
      education records. 
      Please refer to the 
      <a rel="noopener" target="_blank" href=
      "http://www.nwmissouri.edu/policies/academics/Family-Educational-Rights-and-Privacy-Act.pdf"
      >Family Educational Rights and Privacy Act (FERPA) Policy</a>.


      <h2>COVID-19 Classroom Mitigation</h2> 
      
      Northwest is committed to the health and safety of the 
      University community 
      and has therefore adopted COVID-19 mitigation policies. 
      Every student must wear a face covering 
      (such as a cloth facemask, bandana, scarf, neck gaiter, or medical mask) 
      over their nose and mouth at all times in all academic building spaces, 
      including classrooms (unless directed not to by the instructor), 
      offices, hallways, and restrooms. 
      Face shields may be worn in addition to, but not in place of, 
      a face covering. 
      Students without face coverings will not be allowed in the classroom 
      until they comply with expectations. 
      Students must also follow directions regarding entries, exits, 
      and furniture, and maintain at least 6 feet of social distancing 
      whenever possible. 
      Northwest further asks all students to practice good hygiene 
      and not enter academic buildings or attend face-to-face classes 
      when they feel sick or have been instructed to quarantine/isolate; 
      students who miss class should communicate with their instructors. 
      Students who do not comply with these requirements 
      will be subject to standard disciplinary procedures 
      according to the Northwest Student Code of Conduct 
      (i.e. verbal and written warnings followed by a hearing, if necessary). 
      We thank you for doing your part to maintain our learning environment 
      and to protect the health of fellow Bearcats.

      <h2>Change in Course Delivery</h2>

      It is our goal as a University 
      to continue all courses as planned on campus.  
      However, due to unforeseeable impacts of COVID-19, 
      faculty and students must be prepared 
      to move all courses to a remote/online learning format 
      anytime during the semester, 
      either permanently or for a short term. 
      The type of format (synchronous or asynchronous) 
      will be at the discretion of each faculty member. 
      The University and faculty will communicate with students 
      in the event such action is deemed necessary 
      to preserve the health and safety of students and employees.

      <h2>Course Evaluation</h2>

      <p>
        At the end of this course, 
        you will be encouraged to complete a course evaluation.
      </p>

      <h2>Syllabus Subject to Change</h2>

      <p>
        The syllabus is subject to change with instructor notification and
        students will be responsible for abiding by these changes.
      </p>

      <br>
      <br>
      `;

    document.querySelector('#sap-icon').addEventListener('click', () => {
      const heading = document.querySelector('#sap-head').innerHTML;
      const content = document.querySelector('#sap-content').innerHTML;
      const utterance1 = new SpeechSynthesisUtterance();
      const utterance2 = new SpeechSynthesisUtterance();
      utterance1.text = heading;
      utterance2.text = content;
      window.speechSynthesis.speak(utterance1);
      window.speechSynthesis.speak(utterance2);
    });
  }
}

window.customElements.define('nw-syllabus-nw-standard', nwSyllabusNWStandard);
