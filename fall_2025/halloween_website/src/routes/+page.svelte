<script>
  import TrickOrTreat from '$lib/TrickOrTreat.svelte';
</script>

<main>
  <section>
    <h2 class="creepy">Ready for a Surprise?</h2>
    <TrickOrTreat />
  </section>
</main>

<style>
  main {
    max-width: 600px;
    margin: auto;
    padding: 2rem;
    text-align: center;
  }

  h2.creepy {
    font-size: 3rem; /* Adjust size as needed */
  }
</style>