import { writable } from "svelte/store"
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
    game: MapGame

    constructor(Game: typeof GuessGame) {
        this.game = new Game(() => this.rerender(), (countryKey: string) => this.rerenderCountry(countryKey))

        this.countrySvgs = {}
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

    loadMap() {
        const container = document.createElement("div")
        container.setAttribute("id", "mapContainer")
        document.body.prepend(container)

        const svgObject = document.createElement("object")
        svgObject.setAttribute("id", "map")
        svgObject.setAttribute("type", "image/svg+xml")
        svgObject.setAttribute("data", "./map.svg")
        container.appendChild(svgObject)
        const style = document.createElement("style")
        style.innerHTML = "#mapContainer, #map { width: 100%; height: 100%; }"
        document.head.appendChild(style)

        svgObject.onload = () => {
            const svg = svgObject?.getSVGDocument()?.children?.[0]
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

            Object.keys(this.countrySvgs).forEach((key) => {
                const country = this.countrySvgs[key]
                // hoverChildren(country, colors.country)

                country.addEventListener("mouseover", () => {
                    this.game.selected = key
                    if (country.tagName === "g") {
                        this.hoverChildren(country, colors.hover)
                        this.rerender()
                    }
                })

                country.addEventListener("mouseout", () => {
                    this.game.selected = undefined
                    if (country.tagName === "g") {
                        this.hoverChildren(country, this.getColor(key))
                        this.rerender()
                    }
                })

                country.addEventListener("mouseup", () => this.game.onClick())
            })

            /* ------------------------------ Panning stuff ----------------------------- */
            const viewBox = { x: 0, y: 0, w: svg.clientWidth, h: svg.clientHeight }
            const applyViewBox = (viewBox: { x: number; y: number; w: number; h: number }) => svg.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`)
            // applyViewBox(viewBox)
            const svgSize = { w: svg.clientWidth, h: svg.clientHeight }
            let isPanning = false
            const startPoint = { x: 0, y: 0 }
            const endPoint = { x: 0, y: 0 }
            let scale = 1

            svg.addEventListener("wheel", (event: WheelEvent) => {
                const w = viewBox.w
                const h = viewBox.h
                const mx = event.offsetX
                const my = event.offsetY
                const dw = w * Math.sign(event.deltaY) * 0.05
                const dh = h * Math.sign(event.deltaY) * 0.05
                const dx = dw * mx / svgSize.w
                const dy = dh * my / svgSize.h
                viewBox.x = viewBox.x + dx
                viewBox.y = viewBox.y + dy
                viewBox.w = viewBox.w - dw
                viewBox.h = viewBox.h - dh
                scale = svgSize.w / viewBox.w
                applyViewBox(viewBox)
            })

            svg.addEventListener("mousedown", (event: MouseEvent) => {
                isPanning = true
                startPoint.x = event.x
                startPoint.y = event.y
            })

            svg.addEventListener("mousemove", (event: MouseEvent) => {
                if (!isPanning) return
                endPoint.x = event.x
                endPoint.y = event.y
                const dx = (startPoint.x - endPoint.x) / scale
                const dy = (startPoint.y - endPoint.y) / scale
                applyViewBox({ x: viewBox.x + dx, y: viewBox.y + dy, w: viewBox.w, h: viewBox.h })
            })

            svg.addEventListener("mouseup", (event: MouseEvent) => {
                if (!isPanning) return

                endPoint.x = event.x
                endPoint.y = event.y
                const dx = (startPoint.x - endPoint.x) / scale
                const dy = (startPoint.y - endPoint.y) / scale
                viewBox.x = viewBox.x + dx
                viewBox.y = viewBox.y + dy
                viewBox.w = viewBox.w
                viewBox.h = viewBox.h
                applyViewBox(viewBox)
                isPanning = false
            })

            svg.addEventListener("mouseleave", () => {
                isPanning = false
            })
        }
    }

    rerenderCountry(countryKey: string) {
        const country = this.countrySvgs[countryKey]
        if (!country) return
        this.hoverChildren(country, this.getColor(countryKey))
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