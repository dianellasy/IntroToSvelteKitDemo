<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';

  let backgroundMusic: HTMLAudioElement;
  let isPlaying: boolean | null = null;

  onMount(() => {
    backgroundMusic = new Audio('/audio/halloween-music.mp3');
    backgroundMusic.loop = true;
  });

  function toggleMusic() {
    if (isPlaying) {
      backgroundMusic.pause();
    } else {
      backgroundMusic.play();
    }
    isPlaying = !isPlaying;
  }
</script>

<svelte:body />

<header>
  <div class="sound-icon" on:click={toggleMusic}>
    {#if isPlaying === null}
      MUSIC
    {:else if isPlaying}
      🔊
    {:else}
      🔈
    {/if}
  </div>
  <h1 class="creepy">Open Source Spooktacular Halloween</h1>
</header>

<slot />

<style>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background: rgba(0,0,0,0.5);
    position: relative;
  }

  header h1 {
    font-size: 10rem;
    color: #ff7518;
    text-align: center;
  }

  .sound-icon {
    font-size: 2rem;
    cursor: pointer;
    color: #ff7518;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
</style>
