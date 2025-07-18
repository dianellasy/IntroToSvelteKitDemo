<script>
    export let frontText = '';
    export let backText = '';
    let flipped = false;

    function toggle() {
        flipped = !flipped;
    }
</script>



<style>
    button.card {
        all: unset;
        display: block;
        width: 200px;
        height: 120px;
        perspective: 800px;
        cursor: pointer;
    }

    .inner {
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: transform 0.6s;
    }

    .inner.flipped {
        transform: rotateY(180deg);
    }

    .side {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        border: 2px solid lightgray;
        border-radius: 8px;
        background-color: white;
    }

    .side.front:hover {
        transform: scale(1.05);
    }

    .side.back {
        transform: rotateY(180deg);
        background: white;
    }
</style>


<button
    type="button"
    class="card"
    on:click={toggle}
    aria-pressed={flipped}
>
    <div class="inner {flipped ? 'flipped' : ''}">
        <div class="side front">{frontText}</div>
        <div class="side back">{backText}</div>
    </div>
</button>