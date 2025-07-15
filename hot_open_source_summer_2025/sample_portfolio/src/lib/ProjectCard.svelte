<script> 
  export let frontText = ''; // Declare a prop named frontText with an empty string default
  export let backText = ''; // Declare a prop named backText with an empty string default
  let flipped = false; // Initialize a local state variable to track flip status

  function toggle() { // Define a function to toggle the flip state
    flipped = !flipped; // Invert the value of flipped each time toggle is called
  } // End of toggle function
</script> 


<style> /* Begin component-scoped CSS styles */
  button.card { /* Target the button with class "card" */
    all: unset; /* Remove all native button styles */
    display: block; /* Make the button behave like a block element */
    width: 200px; /* Set the card width */
    height: 120px; /* Set the card height */
    perspective: 800px; /* Establish a 3D perspective for children */
    cursor: pointer; /* Show pointer cursor on hover */
  } /* End button.card styles */

  .inner { /* Wrapper that holds both sides of the card */
    position: relative; /* Position children absolutely within */
    width: 100%; /* Fill the full width of the parent button */
    height: 100%; /* Fill the full height of the parent button */
    transform-style: preserve-3d; /* Keep 3D transforms for child elements */
    transition: transform 0.6s; /* Smoothly animate transforms over 0.6 seconds */
  } /* End .inner styles */

  .inner.flipped { /* When .inner has the flipped class */
    transform: rotateY(180deg); /* Rotate it 180 degrees around the Y-axis */
  } /* End .inner.flipped styles */

  .side { /* Common styles for both front and back sides */
    position: absolute; /* Stack sides on top of each other */
    width: 100%; /* Match parent width */
    height: 100%; /* Match parent height */
    backface-visibility: hidden; /* Hide the reverse side when flipped */
    display: flex; /* Use flexbox for centering content */
    align-items: center; /* Vertically center content */
    justify-content: center; /* Horizontally center content */
    font-size: 1.1rem; /* Set readable font size */
    border: 2px solid #ccc; /* Light gray border */
    border-radius: 8px; /* Rounded corners */
    background: #fafafa; /* Light background color */
  } /* End .side styles */

  .side.front:hover { /* Hover state for the front side */
    transform: scale(1.05); /* Slightly enlarge the front side on hover */
  } /* End .side.front:hover styles */

  .side.back { /* Styles specific to the back side */
    transform: rotateY(180deg); /* Initially rotate to face away */
    background: #ffeef0; /* Apply a distinct background color */
  } /* End .side.back styles */
</style> <!-- End component-scoped CSS -->


<!-- Define this element as a button -->
<!-- Assign the "card" class for styling -->
<!-- Attach click handler to call toggle() -->
<!-- Expose flip state to assistive tech -->
<button
  type="button" 
  class="card" 
  on:click={toggle} 
  aria-pressed={flipped} 
>
  <div class="inner {flipped ? 'flipped' : ''}"> <!-- Add "flipped" class when flipped is true -->
    <div class="side front">{frontText}</div> <!-- Front face showing frontText -->
    <div class="side back">{backText}</div> <!-- Back face showing backText -->
  </div> <!-- Close .inner wrapper -->
</button> <!-- Close button element -->