<script lang="ts">
    import { fly } from "svelte/transition";
    export let message: string;
    export let color = "bg-white";
</script>

<div in:fly out:fly class="{color} shadow-lg p-3 text-xl font-semibold rounded-md mb-2 w-fit text-center">
    {message}
</div>
