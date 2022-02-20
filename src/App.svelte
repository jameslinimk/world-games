<script lang="ts">
	import map from "./map/map";
	import InfoBox from "./map/infoBox.svelte";
	import Popups from "./componenets/popups.svelte";
	import GameEnd from "./map/gameEnd.svelte";
	import GithubIco from "./componenets/githubIco.svelte";

	$map.loadMap();
</script>

<InfoBox />
<Popups />
<GameEnd />
<GithubIco />

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
