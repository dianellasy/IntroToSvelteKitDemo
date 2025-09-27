<script lang="ts">
  import '../app.css';
</script>

<svelte:body />

<header>
  <h1 class="creepy">Spooktacular Halloween</h1>
</header>

<slot />

<style>
  header {
    display: flex;
    justify-content: center;
    padding: 1rem;
    background: rgba(0,0,0,0.5);
  }
</style>
