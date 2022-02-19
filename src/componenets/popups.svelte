<script lang="ts">
    import { popups } from "./popup";
    import Popup from "./popup.svelte";

    $popups.add("Test", 2000, "bg-red-400");
</script>

<div class="flex flex-col justify-center content-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    {#each Object.keys($popups.popups) as key}
        <Popup message={$popups.popups[key].message} duration={$popups.popups[key].delay} destroy={() => $popups.remove(key)} color={$popups.popups[key].color} />
    {/each}
</div>
