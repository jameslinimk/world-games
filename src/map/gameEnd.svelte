<script lang="ts">
    import { fade } from "svelte/transition";
    import map from "./map";

    let close = false;
</script>

{#if !close && $map.game.end}
    <div in:fade out:fade class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-green-400 shadow-md text-2xl font-semibold rounded-md w-fit">
        <div class="flex flex-row justify-center mt-1">
            🎉 Game ended! ({new Date($map.game.endedAt - $map.game.started).toISOString().substring(14, 19)}s)&nbsp
            <button class="bg-green-500 shadow-md rounded-md p-1 border-0 text-xl hover:bg-green-600 hover:scale-105 transition-all" on:click={() => (close = true)}>Close</button>
        </div>

        <div class="flex flex-row justify-center mt-1">
            {#each $map.game.getEndStats() as stat}
                <div class="flex-1 flex-grow flex-shrink basis-0 pl-3 pr-3">
                    <div class="text-3xl font-bold flex content-center justify-center text-center">{stat.value}</div>
                    <div class="text-sm flex content-center justify-center text-center">{stat.display}</div>
                </div>
            {/each}
        </div>
    </div>
{/if}
