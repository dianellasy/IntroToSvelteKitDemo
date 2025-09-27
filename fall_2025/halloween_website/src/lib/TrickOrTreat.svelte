<script lang="ts">
  let choice;
  const options = [
    { label: 'Trick', msg: 'Did you know bats always turn left when exiting a cave?' },
    { label: 'Treat', msg: 'Here’s 15% off your next potion! Code: SPOOKY15' }
  ];
  let output = '';
  let audio: HTMLAudioElement | undefined;

  if (typeof window !== 'undefined') {
    audio = new Audio('/sounds/trick-or-treat.mp3');
  }

  function pick() {
    const pick = options[Math.floor(Math.random()*options.length)];
    output = `${pick.label}: ${pick.msg}`;
    if (audio) {
      audio.play();
    }
  }
</script>

<div class="picker">
  <button on:click={pick}>Click for Trick or Treat</button>
  {#if output}
    <p>{output}</p>
  {/if}
</div>

<style>
  .picker {
    text-align: center;
    margin: 2rem 0;
  }
  button {
    background: var(--accent);
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
  }
</style>
