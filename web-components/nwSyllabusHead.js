
class nwSyllabusHead extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
    <!-- Put Google Analytics immediately after head tag -->
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async rel=preconnect src="https://www.googletagmanager.com/gtag/js?id=UA-145064908-1"></script>
    <script>
      window.dataLayer = window.dataLayer || []
  
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())
      gtag('config', 'UA-65828104-10')
    </script>


    <meta name="author" content="Denise Case" />
    <meta name="theme-color" content="#006747" />
    <meta name="msapplication-TileColor" content="#006747" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
 
    <link rel="apple-touch-icon" sizes="180x180" href="./images/favicon_io/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon_io/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="./images/favicon_io/favicon-16x16.png" />
  

    <!-- https://mdbootstrap.com/md-bootstrap-cdn/ -->
  <!-- Material Design for Bootstrap fonts and icons -->
  <!-- Add defer for improved performance -->
  <!-- Explicitly opt in to CORS with crossorigin = "anonymous" -->
  <!-- https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests -->

  



  <!-- Security Note -->
  <!-- When adding links, use rel="noopener" to prevent linked page from being able to access window.opener property. -->
  <!-- This ensures the new page will run in a separate process. -->
  
    `
  }
}

window.customElements.define('nw-syllabus-head', nwSyllabusHead)

