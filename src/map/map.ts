import { writable } from "svelte/store"
import svgPanZoom from "svg-pan-zoom"
import colors from "../colors"
import countryData from "./country-data"
import type MapGame from "./games/game"
import GuessGame from "./games/guess"

class Map {
    countrySvgs: { [key: string]: SVGAElement }
    countryLabels: { [key: string]: HTMLTextAreaElement }
    countryCircles: { [key: string]: SVGGElement }
    smallCountryLabels: { [key: string]: SVGCircleElement }
    game: MapGame
    panZoom?: SvgPanZoom.Instance

    constructor(Game: typeof GuessGame) {
        this.game = new Game(() => this.rerender(), (countryKey: string) => this.rerenderCountry(countryKey))

        this.countrySvgs = {}
        this.countryLabels = {}
        this.countryCircles = {}
        this.smallCountryLabels = {}
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
                }
            })

            this.countrySvgs["Ocean"].style.fill = colors.ocean
            this.countrySvgs["World"].style.fill = colors.ocean

            delete this.countrySvgs["Ocean"]
            delete this.countrySvgs["World"]

            const animationsContainer = document.createElementNS("http://www.w3.org/2000/svg", "g")
            const circlesContainer = document.createElementNS("http://www.w3.org/2000/svg", "g")
            /* --------------------------------- Labels --------------------------------- */
            this.countrySvgs["labels"].childNodes.forEach((_label) => {
                const label = <HTMLTextAreaElement>_label
                // Skip non-<text> text 
                if (label.tagName == "text") {
                    const countryId = label.id.substr(0, 2)
                    this.countryLabels[countryId] = label
                    if (label.textContent != countryData[countryId].name) label.textContent = countryData[countryId].name
                    label.setAttribute("display", "none")

                    /* ---------------------------- Animation circle ---------------------------- */
                    if (!this.countrySvgs[countryId]) return
                    const circleAnimation = document.createElementNS("http://www.w3.org/2000/svg", "circle")
                    circleAnimation.setAttribute("cx", label.getAttribute("x")!)
                    circleAnimation.setAttribute("cy", label.getAttribute("y")!)
                    circleAnimation.setAttribute("r", "0")
                    circleAnimation.setAttribute("fill", "none")
                    circleAnimation.setAttribute("stroke", "#000000")
                    circleAnimation.setAttribute("stroke-width", "2")

                    const circleAnimationAnimation = document.createElementNS("http://www.w3.org/2000/svg", "animate")
                    circleAnimationAnimation.setAttribute("attributeName", "r")
                    circleAnimationAnimation.setAttribute("from", "30")
                    circleAnimationAnimation.setAttribute("to", "0")
                    circleAnimationAnimation.setAttribute("begin", "indefinite")
                    circleAnimationAnimation.setAttribute("dur", "3s")
                    circleAnimation.appendChild(circleAnimationAnimation)

                    animationsContainer.appendChild(circleAnimation)
                    this.countryCircles[countryId] = circleAnimation

                    /* --------------------------- Small label circle --------------------------- */
                    if (label.getAttribute("font-size") !== "2") return
                    const circleSvg = document.createElementNS("http://www.w3.org/2000/svg", "circle")
                    circleSvg.setAttribute("cx", label.getAttribute("x")!)
                    circleSvg.setAttribute("cy", label.getAttribute("y")!)
                    circleSvg.setAttribute("r", "2")
                    circleSvg.setAttribute("fill", colors.smallCircle)
                    circleSvg.setAttribute("stroke", "#FFFFFF")
                    circlesContainer.appendChild(circleSvg)
                    this.smallCountryLabels[countryId] = circleSvg
                }
            })
            svg.appendChild(animationsContainer)
            svg.appendChild(circlesContainer)

            delete this.countrySvgs["labels"]

            Object.keys(this.countrySvgs).forEach((key) => {
                const country = this.countrySvgs[key]

                const mouseOver = () => {
                    this.game.selected = key
                    if (country.tagName === "g") {
                        this.hoverChildren(country, colors.hover)
                        this.rerender()
                        if (this.showLabel(key) && this.countryLabels[key]) {
                            this.countryLabels[key].setAttribute("display", "block")
                        }

                        if (this.smallCountryLabels[key]) {
                            smallLabel.setAttribute("fill", colors.smallCircleHover)
                        }
                    }
                }

                const mouseOut = () => {
                    this.game.selected = undefined
                    if (country.tagName === "g") {
                        this.hoverChildren(country, this.getColor(key))
                        this.rerender()
                        if (this.showLabel(key) && this.countryLabels[key]) {
                            this.countryLabels[key].setAttribute("display", "block")
                        }

                        if (this.smallCountryLabels[key]) {
                            smallLabel.setAttribute("fill", colors.smallCircle)
                        }
                    }
                }

                let doubleClick = false
                let firstClick: number
                const mouseUp = () => {
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
                }

                country.addEventListener("mouseover", mouseOver)
                country.addEventListener("mouseout", mouseOut)

                country.addEventListener("mouseup", mouseUp)

                const smallLabel = this.smallCountryLabels[key]
                if (!smallLabel) return
                smallLabel.addEventListener("mouseover", mouseOver)
                smallLabel.addEventListener("mouseout", mouseOut)
                smallLabel.addEventListener("mouseup", mouseUp)
            })

            this.panZoom = svgPanZoom(svg, {
                dblClickZoomEnabled: false
            })

            // Object.keys(countryData).forEach(key => {
            //     if (!Object.keys(this.countryCircles).includes(key)) {
            //         console.log(key, countryData[key].name)
            //     }
            // })
            // console.log("-")
            // Object.keys(countryData).forEach(key => {
            //     if (!Object.keys(this.countrySvgs).includes(key)) {
            //         console.log(key, countryData[key].name)
            //     }
            // })
        }
    }

    ping(countryKey: string) {
        if (!this.countryCircles[countryKey]) return
        const animation = <SVGAnimateElement>this.countryCircles[countryKey].children[this.countryCircles[countryKey].children.length - 1]
        animation.beginElement()
    }

    rerenderCountry(countryKey: string) {
        const country = this.countrySvgs[countryKey]
        if (!country) return

        this.ping(countryKey)

        this.hoverChildren(country, this.getColor(countryKey))
        if (this.showLabel(countryKey) && this.countryLabels[countryKey]) {
            this.countryLabels[countryKey].setAttribute("display", "block")
            if (!this.smallCountryLabels[countryKey]) return
            this.smallCountryLabels[countryKey].setAttribute("visibility", "hidden")
        }
    }

    rerender() {
        map.update((v) => v)
    }
}

const map = writable(new Map(GuessGame))
export default map