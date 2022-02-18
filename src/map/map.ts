import { writable } from "svelte/store"
import type { MapGame } from "./games/game"
import GuessGame from "./games/guess"

const colors = {
    "ocean": "#84DFFF",
    "country": "#65C18C",
    "hover": "#C1F4C5"
}

class Map {
    svg?: HTMLObjectElement
    countrySvgs: { [key: string]: SVGAElement }

    constructor(public game: MapGame) {
        this.countrySvgs = {}
        document.body.style.backgroundColor = colors.ocean
    }

    loadMap() {
        const container = document.createElement("div")
        container.setAttribute("id", "mapContainer")
        document.body.prepend(container)

        this.svg = document.createElement("object")
        this.svg.setAttribute("id", "map")
        this.svg.setAttribute("type", "image/svg+xml")
        this.svg.setAttribute("data", "./map.svg")
        container.appendChild(this.svg)
        const style = document.createElement("style")
        style.innerHTML = "#mapContainer, #map { width: 100%; height: 100%; }"
        document.head.appendChild(style)

        this.svg.onload = () => {
            this.svg?.getSVGDocument()?.children[0]?.childNodes?.forEach((_node) => {
                const node = <SVGAElement>_node
                if (node.id != undefined && node.id.substr(0, 1) != "_" && (node.tagName == "g" || node.tagName == "path" || node.tagName == "rect")) {
                    this.countrySvgs[node.id] = node
                }
            })

            this.countrySvgs["Ocean"].style.fill = colors.ocean
            this.countrySvgs["World"].style.fill = colors.ocean

            delete this.countrySvgs["Ocean"]
            delete this.countrySvgs["World"]

            const hover = (svg: SVGAElement, color: string) => {
                svg.style.fill = color
            }

            const hoverChildren = (svg: SVGAElement, color: string) => {
                svg.childNodes.forEach((svg: SVGAElement) => {
                    if (svg.tagName === "g") {
                        hoverChildren(svg, color)
                    } else if (svg.tagName === "path" || svg.tagName === "circle") {
                        hover(svg, color)
                    }
                })
            }

            Object.keys(this.countrySvgs).forEach((key) => {
                const country = this.countrySvgs[key]
                // hoverChildren(country, colors.country)

                country.addEventListener("mouseover", () => {
                    this.game.selected = key
                    if (country.tagName === "g") {
                        hoverChildren(country, colors.hover)
                        this.rerender()
                    }
                })

                country.addEventListener("mouseout", () => {
                    this.game.selected = undefined
                    if (country.tagName === "g") {
                        hoverChildren(country, colors.country)
                        this.rerender()
                    }
                })

                country.addEventListener("mouseup", () => this.game.onClick())
            })
        }
    }

    rerender() {
        map.update((v) => v)
    }
}

const map = writable(new Map(new GuessGame()))

export {
    map,
    colors
}

export type {
    Map
}