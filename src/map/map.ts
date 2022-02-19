import { writable } from "svelte/store"
import svgPanZoom from "svg-pan-zoom"
import countryData from "./country-data"
import type { MapGame } from "./games/game"
import GuessGame from "./games/guess"

const colors = {
    "ocean": "#84DFFF",
    "country": "#65C18C",
    "hover": "#C1F4C5",
    "correct": "#C2F784",
    "semiCorrect": "#FFFDA2",
    "incorrect": "#FE9898"
}

class Map {
    countrySvgs: { [key: string]: SVGAElement }
    countryLabels: { [key: string]: HTMLTextAreaElement }
    game: MapGame

    constructor(Game: typeof GuessGame) {
        this.game = new Game(() => this.rerender(), (countryKey: string) => this.rerenderCountry(countryKey))

        this.countrySvgs = {}
        this.countryLabels = {}
        document.body.style.backgroundColor = colors.ocean
    }

    hover(svg: SVGAElement, color: string) {
        svg.style.fill = color
    }

    hoverChildren(svg: SVGAElement, color: string) {
        svg.childNodes.forEach((svg: SVGAElement) => {
            if (svg.tagName === "g") {
                this.hoverChildren(svg, color)
            } else if (svg.tagName === "path" || svg.tagName === "circle") {
                this.hover(svg, color)
            }
        })
    }

    getColor(country: string) {
        if (this.game.correctCountries.includes(country)) return colors.correct
        if (this.game.incorrectCountries.includes(country)) return colors.incorrect
        if (this.game.semiCorrectCountries.includes(country)) return colors.semiCorrect
        return colors.country
    }

    showLabel(country: string) {
        if (this.game.correctCountries.includes(country)) return true
        if (this.game.incorrectCountries.includes(country)) return true
        if (this.game.semiCorrectCountries.includes(country)) return true
        return false
    }

    loadMap() {
        const container = document.createElement("div")
        container.setAttribute("id", "mapContainer")
        document.body.prepend(container)

        const svgObject = document.createElement("object")
        svgObject.setAttribute("id", "map")
        svgObject.setAttribute("type", "image/svg+xml")
        svgObject.setAttribute("data", "./public/map.svg")
        // svgObject.setAttribute("data", "./map.svg")
        container.appendChild(svgObject)
        const style = document.createElement("style")
        style.innerHTML = `
#mapContainer, #map {
    width: 100%;
    height: 100%;
}

@keyframes pop {
    50% { transform: scale(500); }
}`
        document.head.appendChild(style)

        svgObject.onload = () => {
            const svg = <SVGAElement>svgObject?.getSVGDocument()?.children?.[0]
            if (!svg) throw new Error()

            svg.childNodes.forEach((_node) => {
                const node = <SVGAElement>_node
                if (node.id != undefined && node.id.substr(0, 1) != "_" && (node.tagName == "g" || node.tagName == "path" || node.tagName == "rect")) {
                    this.countrySvgs[node.id] = node
                }
            })

            this.countrySvgs["Ocean"].style.fill = colors.ocean
            this.countrySvgs["World"].style.fill = colors.ocean

            delete this.countrySvgs["Ocean"]
            delete this.countrySvgs["World"]

            /* --------------------------------- Labels --------------------------------- */
            this.countrySvgs["labels"].childNodes.forEach((_label) => {
                const label = <HTMLTextAreaElement>_label
                // Skip non-<text> text 
                if (label.tagName == "text") {
                    const countryId = label.id.substr(0, 2)
                    this.countryLabels[countryId] = label
                    if (label.textContent != countryData[countryId].name) label.textContent = countryData[countryId].name

                    label.setAttribute("display", "none")
                }
            })

            Object.keys(this.countrySvgs).forEach((key) => {
                const country = this.countrySvgs[key]
                // hoverChildren(country, colors.country)

                country.addEventListener("mouseover", () => {
                    this.game.selected = key
                    if (country.tagName === "g") {
                        this.hoverChildren(country, colors.hover)
                        this.rerender()
                        if (this.showLabel(key) && this.countryLabels[key]) {
                            this.countryLabels[key].setAttribute("display", "block")
                        }
                    }
                })

                country.addEventListener("mouseout", () => {
                    this.game.selected = undefined
                    if (country.tagName === "g") {
                        this.hoverChildren(country, this.getColor(key))
                        this.rerender()
                        if (this.showLabel(key) && this.countryLabels[key]) {
                            this.countryLabels[key].setAttribute("display", "block")
                        }
                    }
                })

                let doubleClick = false
                let firstClick: number
                country.addEventListener("mouseup", () => {
                    if (doubleClick === false) {
                        doubleClick = true
                        firstClick = performance.now()
                        return
                    }

                    if (performance.now() - firstClick > 750) {
                        doubleClick = false
                        return
                    }

                    doubleClick = false
                    this.game.onClick()
                })
            })

            svgPanZoom(svg, {
                dblClickZoomEnabled: false
            })
        }
    }

    pop(svg: SVGAElement) {
        console.log("Before", svg.style.animation)
        svg.style.animation = "pop 5s linear 1"
        console.log("After", svg.style.animation)
    }

    popChildren(svg: SVGAElement) {
        svg.childNodes.forEach((svg: SVGAElement) => {
            if (svg.tagName === "g") {
                this.popChildren(svg)
            } else if (svg.tagName === "path" || svg.tagName === "circle") {
                this.pop(svg)
            }
        })
    }

    rerenderCountry(countryKey: string) {
        const country = this.countrySvgs[countryKey]
        if (!country) return

        this.popChildren(country)

        this.hoverChildren(country, this.getColor(countryKey))
        if (this.showLabel(countryKey) && this.countryLabels[countryKey]) {
            this.countryLabels[countryKey].setAttribute("display", "block")
        }
    }

    rerender() {
        map.update((v) => v)
    }
}

const map = writable(new Map(GuessGame))

export {
    map,
    colors
}