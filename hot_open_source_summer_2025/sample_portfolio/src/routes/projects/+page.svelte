<script>
    import ProjectCard from '$lib/ProjectCard.svelte';
</script>



<style>
    h1 {
        text-align: center;
        font-weight: bold;
        margin-top: 1.5rem;
        color: white;
    }

    .cards {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin: 2rem 1rem;
    }

    .static-card {
        width: 200px;
        height: 120px;
        border: 2px solid lightgray;
        border-radius: 8px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        transition: transform 0.3s;
        cursor: default;
    }

    .static-card:hover {
        transform: translateY(-5px);
    }
</style>



<h1>Projects</h1>

<div class="cards">
    <ProjectCard frontText="Project One" backText="Details about Project One..." />

    <div class="static-card">
        Project Two
    </div>
</div>