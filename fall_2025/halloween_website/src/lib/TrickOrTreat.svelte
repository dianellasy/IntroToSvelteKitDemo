<script lang="ts">
  // Variable to store the selected message (not used in this code)
  let choice;
  // Array of message options to display randomly
  const options = [
    { msg: 'happy halloween! 🧡, dianella' }, // Message 1
    { msg: 'christmas came early this year -evan🥪' }, // Message 2
    { msg: '12 more weeks, shes defrosting 🎄, anderson' }, // Message 3
    { msg: 'happiest time of the year, emily' }, // Message 4
    { msg: 'Guys Im scared - Sid' }, // Message 5
    { msg: 'I know where you live - Josh' }, // Message 6
    { msg: '"Bones and all is a good movie - Josh" - Eddie' }, // Message 7
    { msg: 'boo - timmy' } // Message 7
  ];
  // Variable to store the output message
  let output = '';
  // Variable to store the audio element
  let audio: HTMLAudioElement | undefined;

  // Only run in the browser (not during SSR)
  if (typeof window !== 'undefined') {
    // Create a new Audio object for the sound effect
    audio = new Audio('/sounds/trick-or-treat.mp3');
  }

  // Function to pick a random message and play audio
  function pick() {
    // Pick a random option from the array
    const pick = options[Math.floor(Math.random() * options.length)];
    // Set the output to the selected message
    output = pick.msg;
    // Play the audio if available
    if (audio) {
      audio.play();
    }
  }
</script>

<!-- Main container for the picker UI -->
<div class="picker">
  <!-- Button to trigger the pick function -->
  <button on:click={pick}>Click for Message from the Open Source Board</button>
  <!-- Display the output message if one is selected -->
  {#if output}
    <p>{output}</p>
  {/if}
</div>

<style>
  /* Style for the picker container */
  .picker {
    text-align: center;
    margin: 2rem 0;
  }
  /* Style for the button */
  button {
    background: #ff7518; /* Updated button color */
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
  }
</style>
