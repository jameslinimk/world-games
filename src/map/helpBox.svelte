<script lang="ts">
    import { fade } from "svelte/transition";
    import map from "./map";

    export let toggleHelpBox = () => {
        show = !show;
    };
    let show = false;
</script>

{#if show}
    <div in:fade out:fade class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-green-400 shadow-md text-2xl font-bold rounded-md">
        <div class="flex flex-row content justify-center">
            How to play:
            <div class="ml-auto order-2">
                <div class="bg-green-500 rounded-md hover:bg-green-600 hover:scale-105 hover:cursor-pointer transition-all flex text-center pb-0.5" on:click={toggleHelpBox}>❌</div>
            </div>
        </div>
        <div class="text-lg font-normal">
            {@html $map.game.helpBoxHTML}
        </div>
    </div>
{/if}
