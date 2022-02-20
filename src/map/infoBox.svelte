<script lang="ts">
    import countryData from "./country-data";
    import HelpBox from "./helpBox.svelte";
    import map from "./map";

    let toggleHelpBox: () => void;
</script>

<div class="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 bg-green-300 p-3 shadow-lg rounded-md text-2xl font-semibold">
    <div class="flex flex-row justify-center">
        {#each Object.keys($map.game.stats) as index}
            <div class="flex-1 flex-grow flex-shrink basis-0 pl-3 pr-3">
                <div class="text-3xl font-bold flex content-center justify-center text-center">{$map.game.stats[index].value}</div>
                <div class="text-sm flex content-center justify-center text-center">{$map.game.stats[index].display}</div>
            </div>
        {/each}
    </div>
    <div class="flex flex-row content justify-center mt-1">
        <div class="text-center">{$map.game.end ? "Game ended!" : `Find: ${countryData[$map.game.country].name} (${$map.game.guesses}/${$map.game.maxGuesses})`}</div>
        {#if !$map.game.end}
            &nbsp
            <button class="bg-green-500 rounded-md p-1 border-0 text-xl hover:bg-green-600 hover:scale-105 transition-all" on:click={() => $map.game.skip()}>Skip</button>
            <!-- &nbsp
            <button
                class="bg-green-500 rounded-md p-1 border-0 text-xl hover:bg-green-600 hover:scale-105 transition-all"
                on:click={() => {
                    for (let i = 0; i < 250; i++) $map.game.skip();
                }}>Skip x250</button
            > -->
        {/if}

        &nbsp
        <div class="bg-green-500 rounded-md hover:bg-green-600 hover:scale-105 hover:cursor-pointer transition-all" on:click={toggleHelpBox}>❓</div>
    </div>
</div>

<HelpBox bind:toggleHelpBox />
