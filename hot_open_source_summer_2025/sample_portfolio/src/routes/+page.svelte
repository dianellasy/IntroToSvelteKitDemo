<script> 
  // No JavaScript 
</script> <!-- Closes the JavaScript block -->


<style> 
  header { /* Begins style rules for the <header> element */ 
    position: fixed; /* Fixes header position relative to viewport */
    top: 0; /* Aligns header to the top of the viewport */
    left: 0; /* Aligns header to the left of the viewport */
    width: 100%; /* Makes header span the full width */
    height: 4rem; /* Sets header height to 4 rem units */
    background: pink; /* Applies pink background color */
    display: flex; /* Enables flexbox layout inside header */
    align-items: center; /* Vertically centers flex items */
    justify-content: center; /* Horizontally centers flex items */
    padding: 0 1.5rem; /* Adds 1.5rem horizontal padding */
    z-index: 10; /* Ensures header sits above other elements */
  } /* Ends style rules for <header> */

  a.nav-link { /* Begins style rules for links with class "nav-link" */
    text-decoration: none; /* Removes default underline */
    color: black; /* Sets link text color to black */
    font-weight: bold; /* Makes the link text bold */
    font-size: 1.1rem; /* Increases font size slightly */
    margin-left: 110rem; /* Pushes link far to the right */
    transition: color 0.3s; /* Smoothly transitions color on hover */
  } /* Ends style rules for .nav-link */

  a.nav-link:hover { /* Begins hover state rules for .nav-link */
    color: white; /* Changes link color to white when hovered */
  } /* Ends hover state rules */

  main { /* Begins style rules for the <main> element */
    padding-top: 4rem; /* Offsets main content below the fixed header */
    background: #000; /* Sets background color to black */
    color: #fff; /* Sets text color to white for contrast */
  } /* Ends style rules for <main> */
</style> <!-- Closes the CSS style block -->


<header> <!-- Defines the page header section -->
  <a href="/projects" class="nav-link">Projects</a> <!-- Navigation link to the projects page -->
</header> <!-- Closes the header section -->


<main> <!-- Defines the main content container -->
  <slot /> <!-- Placeholder for injected or slotted content -->
</main> <!-- Closes the main content container -->