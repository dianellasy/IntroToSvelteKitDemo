<script>
  import ProjectCard from '$lib/ProjectCard.svelte'; // Import the ProjectCard component from the lib directory 
</script> 

<style> /* Begin component-scoped styles */
  h1 { /* Style rules for the main heading */
    text-align: center; /* Center the heading text horizontally */
    font-weight: bold; /* Make the heading text bold */
    margin-top: 1.5rem; /* Add spacing above the heading */
    color: #fff;           /* White text */
  } /* End h1 style rules */

  .cards { /* Style rules for the container holding all cards */
    display: flex; /* Use flexbox layout for cards */
    justify-content: center; /* Center cards horizontally within the container */
    gap: 2rem; /* Space of 2rem between each card */
    margin: 2rem 1rem; /* Vertical and horizontal margin around the cards container */
  } /* End .cards style rules */

  /* styles for the static, non-flipping rectangle */ 
  .static-card { /* Style rules for the non-interactive card */
    width: 200px; /* Fixed card width */
    height: 120px; /* Fixed card height */
    border: 2px solid #ccc; /* Light gray 2px border */
    border-radius: 8px; /* Rounded corners of 8px radius */
    background: #fafafa; /* Very light gray background */
    display: flex; /* Flexbox for centering content inside the card */
    align-items: center; /* Vertically center card content */
    justify-content: center; /* Horizontally center card content */
    font-size: 1.1rem; /* Slightly larger font size */
    transition: transform 0.3s; /* Smooth transform transition on hover */
    cursor: default; /* Default cursor (no pointer) */
  } /* End .static-card style rules */

  .static-card:hover { /* Hover state styling for the static card */
    transform: translateY(-5px);   /* Hover up effect */ /* Move card up by 5px on hover */
  } /* End .static-card:hover rules */

</style> 


<h1>Projects</h1> <!-- Page title displayed to users -->

<div class="cards"> <!-- Wrapper div for all project cards -->
  <!-- Flippable card for Project One --> <!-- Note about the next component -->
  <ProjectCard frontText="Project One" backText="Details about Project One…" /> <!-- Renders a flipping card with front and back text -->

  <!-- Static card for Project Two --> 
  <div class="static-card"> <!-- Non-flipping card container -->
    Project Two <!-- Label text inside the static card -->
  </div> <!-- Close static-card div -->
</div> <!-- Close cards container -->