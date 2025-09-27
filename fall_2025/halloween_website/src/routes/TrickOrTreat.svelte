<script lang="ts">
  let choice;
  const options = [
    { msg: 'happy halloween! 🧡, dianella' },
    { msg: 'Boo! 👻' },
    { msg: 'Stay spooky! 🕷️' },
    { msg: 'Trick or treat yourself! 🍬' },
    { msg: 'Beware of the full moon! 🌕' }
  ];
  let output = '';
  let audio: HTMLAudioElement | undefined;

  if (typeof window !== 'undefined') {
    audio = new Audio('/sounds/trick-or-treat.mp3');
  }

  function pick() {
    const pick = options[Math.floor(Math.random() * options.length)];
    output = pick.msg;
    if (audio) {
      audio.play();
    }
  }
</script>

<div class="picker">
  <button on:click={pick}>Click for Message from the Open Source Board</button>
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
    background: #ff7518; /* Updated button color */
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
  }
</style>
