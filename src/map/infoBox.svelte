<script>
    import countryData from "./country-data";
    import { map } from "./map";
</script>

<div class="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 bg-green-300 p-3 shadow-lg rounded-md text-2xl font-semibold">
    <div class="flex flex-row content justify-center">
        <div class="text-center">Find: {countryData[$map.game.country].name} ({`${$map.game.guesses}/${$map.game.maxGuesses}`})</div>
        &nbsp
        <button class="bg-green-500 rounded-md p-1 border-0 text-xl hover:bg-green-600 hover:scale-105 transition-all" on:click={() => $map.game.skip()}>Skip</button>
    </div>
    <div class="flex flex-row justify-center">
        {#each [[$map.game.correct, "Correct"], [$map.game.semiCorrect, "Semi"], [$map.game.incorrect, "Incorrect"], [$map.game.skips, "Skipped"]] as stat}
            <div class="flex-1 flex-grow flex-shrink basis-0 pl-3 pr-3">
                <div class="text-3xl font-bold flex content-center justify-center text-center">{stat[0]}</div>
                <div class="text-sm flex content-center justify-center text-center">{stat[1]}</div>
            </div>
        {/each}
    </div>
</div>

<style></style>
