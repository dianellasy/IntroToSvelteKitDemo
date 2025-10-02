<script lang="ts">
  // Import global styles
  import '../app.css';
  // Import onMount lifecycle function from Svelte
  import { onMount } from 'svelte';

  // Variable to hold the background music audio element
  let backgroundMusic: HTMLAudioElement;
  // State to track if music is playing (null = not started)
  let isPlaying: boolean | null = null;

  // Initialize the background music when the component mounts
  onMount(() => {
    backgroundMusic = new Audio('/audio/halloween-music.mp3'); // Load music file
    backgroundMusic.loop = true; // Loop the music
  });

  // Function to toggle music playback
  function toggleMusic() {
    if (isPlaying) {
      backgroundMusic.pause(); // Pause music if playing
    } else {
      backgroundMusic.play(); // Play music if paused
    }
    isPlaying = !isPlaying; // Toggle the state
  }
</script>


<!-- Svelte body element for global styles -->
<svelte:body />


<!-- Page header with sound icon and title -->
<header>
  <!-- Sound icon toggles music on click -->
  <div class="sound-icon" on:click={toggleMusic}>
    {#if isPlaying === null}
      MUSIC <!-- Show text before music is started -->
    {:else if isPlaying}
      🔊 <!-- Show speaker icon if music is playing -->
    {:else}
      🔈 <!-- Show muted icon if music is paused -->
    {/if}
  </div>
  <!-- Main page title -->
  <h1 class="creepy">Open Source Spooktacular Halloween</h1>
</header>


<!-- Slot for child page content -->
<slot />

<style>
  /* Style for the header container */
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background: rgba(0,0,0,0.5);
    position: relative;
  }

  /* Style for the main title */
  header h1 {
    font-size: 10rem;
    color: #ff7518;
    text-align: center;
  }

  /* Style for the sound icon */
  .sound-icon {
    font-size: 2rem;
    cursor: pointer;
    color: #ff7518;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
</style>
