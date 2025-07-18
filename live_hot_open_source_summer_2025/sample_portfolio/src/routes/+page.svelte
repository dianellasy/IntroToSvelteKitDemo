<script>

</script>



<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4rem;
        background: pink;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1.5rem;
        z-index: 10;
    }

    a.nav-link {
        text-decoration: none;
        color: black;
        font-weight: bold;
        font-size: 1.1rem;
        margin-left: 110rem;
        transition: color 0.3s;
    }

    a.nav-link:hover {
        color: white;
        text-decoration: underline;
        text-decoration-color: white;
    }

    main {
        padding-top: 4rem;
        background: black;
        color: white;
    }
</style>


<header> 
    <a href="/projects" class="nav-link">Projects</a>
</header>


<main>
    <slot />
</main>