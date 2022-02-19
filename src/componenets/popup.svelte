<script lang="ts">
    import { fly } from "svelte/transition";
    export let message: string;
    export let duration: number;
    export let destroy: () => void;
    export let color = "bg-white";

    setTimeout(destroy, duration);
</script>

<div in:fly out:fly class="{color} shadow-lg p-3 text-xl font-semibold rounded-md">
    {message}
</div>
