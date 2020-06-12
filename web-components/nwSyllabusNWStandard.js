class nwSyllabusNWStandard extends HTMLElement {
  constructor () {
    super ()
    this.innerHTML = `
      <!-- Standard University -->

      <h2>Grade of Incomplete (I)</h2>

      Following Northwest Missouri State University policy, incomplete grades
      may only be given in extreme circumstances, such as illness, death in a
      student's immediate family, or similar circumstances beyond a student's
      control, and the student was unable to complete a significant portion of
      the course work.

      <h2>University Attendance Recommendations</h2>

      Students are expected to attend all classes as specified in the course syllabi for each course. 
      It is the responsibility of the student to promptly notify his or her instructor when unable to attend class. 
      Students receiving veterans' benefits should consult with the coordinator of Veterans' Affairs 
      for the additional attendance requirements.
      
      Please
      refer to the university policy on attendance at
      <a rel="noopener" target="_blank" href="https://www.nwmissouri.edu/policies/academics/Attendance.pdf">
        https://www.nwmissouri.edu/policies/academics/Attendance.pdf</a>.

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

      <h2>Course Access</h2>

      Course content is provided via Canvas and Northwest Online. Access to
      Northwest Online is at
      <a rel="noopener" href="https://nwmissouri.instructure.com/">https://nwmissouri.instructure.com/</a>.

      <h2>University Communications</h2>

      Students are expected to use their Northwest student email account for
      any electronic correspondence within the university. Students are also
      strongly advised to check their email and CatPAWS accounts on a regular
      basis.

      <h2>Academic Integrity Policy</h2>

      The students, faculty, and staff at Northwest endeavor to sustain an
      environment that values honesty in academic work, that acknowledges the
      authorized aid provided by and intellectual contributions of others, and
      that enables equitable student evaluation. Please refer to Northwest
      Missouri State University’s Academic Integrity Policy at
      <a rel="noopener" target="_blank"
        href="http://www.nwmissouri.edu/policies/academics/Academic-Integrity.pdf">http://www.nwmissouri.edu/policies/academics/Academic-Integrity.pdf</a>.
      In addition, students are expected to understand and abide by the
      Computer Science and Information Systems Academic Integrity Policy at
      <a rel="noopener" target="_blank"
        href="http://www.nwmissouri.edu/csis/pdf/AcademicIntegrityCSI.doc">http://www.nwmissouri.edu/csis/pdf/AcademicIntegrityCSI.doc</a>.
      This document explains types of behavior considered to constitute
      academic dishonesty. You are responsible for reading this document and
      abiding by the guidelines described therein.

      <h2>Special Accommodations Policy</h2>

      Northwest Missouri State University complies with Section 504 of the
      Rehabilitation Act of 1973 and the Americans with Disabilities Act of
      1990 [ADA] and the ADA Amendments Act of 2008 [ADAAA]. 
      If a student has a disability that qualifies under the ADA/ADAAA and requires
      accommodations, they should contact the Office for Equity and
      Accessibility for information on appropriate policies and procedures at
      <a rel="noopener" href="tel:+16605621639">660.562.1639</a>, or
      <a rel="noopener" target="_top" href="mailto:pjp@nwmissouri.edu?Subject=Accomodations">pjp@nwmissouri.edu</a>
      or
      <a rel="noopener" target="_top" href="mailto:ADA@nwmissouri.edu?Subject=Accomodations">ADA@nwmissouri.edu</a>. For
      the university policy on disability accommodation refer to
      <a rel="noopener" target="_blank"
        href="http://www.nwmissouri.edu/policies/student/Disability-Accommodation.pdf">http://www.nwmissouri.edu/policies/student/Disability-Accommodation.pdf</a>.

      <h2>Non-Discrimination and Anti-Harrassment Policy</h2>

      Northwest Missouri State University is committed to maintaining an
      environment for all faculty, staff, students, and third parties that is
      free of illegal discrimination and harassment. Please refer to the
      Non-Discrimination and Anti-Harassment Policy at
      <a rel="noopener" target="_blank"
        href="http://www.nwmissouri.edu/diversity/titlevi.htm">http://www.nwmissouri.edu/diversity/titlevi.htm</a>.

      <h2>Family Educational Rights and Privacy Act (FERPA)</h2>

      Family Educational Rights and Privacy Act of 1974, as amended (commonly
      known as the Buckley Amendment), is a federal law which provides that
      colleges and universities will maintain the confidentiality of student
      education records. Please refer to the Family Educational Rights and
      Privacy Act (FERPA) Policy at
      <a rel="noopener" target="_blank"
        href="http://www.nwmissouri.edu/policies/academics/Family-Educational-Rights-and-Privacy-Act.pdf">http://www.nwmissouri.edu/policies/academics/Family-Educational-Rights-and-Privacy-Act.pdf</a>.

      <h2>Course Evaluation</h2>

      <p>
        At the end of this course, you will be encouraged to complete a course
        evaluation.
      </p>

      <h2>Syllabus Subject to Change</h2>

      <p>
        The syllabus is subject to change with instructor notification and
        students will be responsible for abiding by these changes.
      </p>

      <br />
      <br />

      `
    }
  }
  
  window.customElements.define('nw-syllabus-nw-standard', nwSyllabusNWStandard)
  
  