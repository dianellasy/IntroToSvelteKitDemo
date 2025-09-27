<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';

  let backgroundMusic: HTMLAudioElement;
  let autoplayBlocked = false;

  onMount(() => {
    backgroundMusic = new Audio('/audio/halloween-music.mp3');
    backgroundMusic.loop = true;
    backgroundMusic.play().catch(() => {
      autoplayBlocked = true;
      console.log('Autoplay blocked. User interaction required.');
    });
  });

  function playMusic() {
    backgroundMusic.play();
    autoplayBlocked = false;
  }
</script>

<svelte:body />

<header>
  <h1 class="creepy">Open Source Spooktacular Halloween</h1>
</header>

{#if autoplayBlocked}
  <button on:click={playMusic}>Play Music</button>
{/if}

<slot />

<style>
  header {
    display: flex;
    justify-content: center;
    padding: 1rem;
    background: rgba(0,0,0,0.5);
  }

  button {
    display: block;
    margin: 1rem auto;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background: var(--accent);
    color: #fff;
    border: none;
    cursor: pointer;
  }
</style>
