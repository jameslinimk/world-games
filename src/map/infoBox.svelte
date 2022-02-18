<script>
    import countryData from "./country-data";
    import { map } from "./map";
</script>

<div class="infoBox">Selected: {$map.game.selected === undefined ? "None" : countryData[$map.game.selected].name}</div>

<style>
    .infoBox {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translate(-50%, 0);

        background-color: white;
        border-radius: 5px;
        box-shadow: 5px 5px 19px #888888;

        padding: 10px;
        font-size: xx-large;
    }
</style>
