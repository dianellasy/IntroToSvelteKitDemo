<script lang="ts">
  let choice;
  const options = [
    { msg: 'happy halloween! 🧡, dianella' },
    { msg: 'christmas came early this year -evan🥪' },
    { msg: '12 more weeks, shes defrosting 🎄, anderson' },
    { msg: 'happiest time of the year, emily' },
    { msg: 'Guys Im scared - Sid' },
    { msg: 'I know where you live - Josh' }
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
