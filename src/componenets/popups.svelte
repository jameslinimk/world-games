<script lang="ts">
    import { popups } from "./popup";
    import Popup from "./popup.svelte";
</script>

<div class="flex flex-col content-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    {#each Object.keys($popups.popups) as key}
        <Popup message={$popups.popups[key].message} color={$popups.popups[key].color} />
    {/each}
</div>
