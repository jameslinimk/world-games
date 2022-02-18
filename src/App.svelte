<script lang="ts">
	import { map } from "./map/map";
	import InfoBox from "./map/infoBox.svelte";

	$map.loadMap();
</script>

<main>
	<InfoBox />
</main>

<style>
</style>
