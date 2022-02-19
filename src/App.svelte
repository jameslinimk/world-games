<script lang="ts">
	import { map } from "./map/map";
	import InfoBox from "./map/infoBox.svelte";
	import Popups from "./componenets/popups.svelte";

	$map.loadMap();
</script>

<InfoBox />
<Popups />

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
