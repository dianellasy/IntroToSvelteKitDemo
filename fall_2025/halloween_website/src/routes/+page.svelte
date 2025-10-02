<!-- Import the TrickOrTreat component -->
<script>
  import TrickOrTreat from '$lib/TrickOrTreat.svelte';
</script>

<svelte:head>
  <title>Open Source Halloween</title>
</svelte:head>


<!-- Main content area -->
<main>
  <section>
    <!-- Section heading -->
    <h2 class="creepy">Ready for a Surprise?</h2>
    <!-- Render the TrickOrTreat component -->
    <TrickOrTreat />
  </section>
</main>


<style>
  /* Style for the main container */
  main {
    max-width: 600px;
    margin: auto;
    padding: 2rem;
    text-align: center;
  }

  /* Style for the creepy heading */
  h2.creepy {
    font-size: 3rem; /* Adjust size as needed */
  }
</style>