<script lang="ts">
  export let status;
  export let error;
  export function load({ error, status }: { error: Error; status: number }) {
    return { props: { error, status } };
  }
</script>

<svelte:head>
  <title>{status}: {error.message}</title>
</svelte:head>

<main>
  <h1 class="creepy">👻 Oops! {status}</h1>
  <p>{error.message}</p>
  <a href="/">Return to Safety</a>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    text-align: center;
  }
</style>
