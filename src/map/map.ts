import { writable } from "svelte/store"
import svgPanZoom from "svg-pan-zoom"
import colors from "../colors"
import countryData from "./country-data"
import type MapGame from "./games/game"
import GuessGame from "./games/guess"

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

    getColor = (country: string) => (this.game.countryColors[country]) ? this.game.countryColors[country] : colors.country
    showLabel = (country: string) => Object.keys(this.game.countryColors).includes(country)

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
        style.innerHTML = "#mapContainer, #map { width: 100%; height: 100%; }"
        document.head.appendChild(style)

        svgObject.onload = () => {
            const svg = <SVGAElement>svgObject?.getSVGDocument()?.children?.[0]
            if (!svg) throw new Error()

            svg.childNodes.forEach((_node) => {
                const node = <SVGAElement>_node
                if (node.id != undefined && node.id.substr(0, 1) != "_" && (node.tagName == "g" || node.tagName == "path" || node.tagName == "rect")) {
                    this.countrySvgs[node.id] = node

                    const animation = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform")
                    animation.setAttribute("attributeName", "transform")
                    animation.setAttribute("type", "scale")
                    animation.setAttribute("additive", "sum")
                    animation.setAttribute("from", "0 0")
                    animation.setAttribute("to", "1 1")
                    animation.setAttribute("begin", "indefinite")
                    animation.setAttribute("dur", "1s")
                    node.appendChild(animation)
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
        const animation = <SVGAnimateTransformElement>svg.children[svg.children.length - 1]
        animation.beginElement()
    }

    rerenderCountry(countryKey: string) {
        const country = this.countrySvgs[countryKey]
        if (!country) return

        this.pop(country)

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
export default map