import countryData from "../country-data"
import type { MapGame } from "./game"

class GuessGame implements MapGame {
    selected?: string
    countries: string[]
    country: string

    skips: number
    correct: number
    incorrect: number
    constructor() {
        this.countries = Object.keys(countryData).filter(key => key !== "World")
        this.country = this.countries[Math.floor(Math.random() * this.countries.length)]

        this.skips = 0
        this.correct = 0
        this.incorrect = 0
    }

    newCountry() {
        this.country = this.countries[Math.floor(Math.random() * this.countries.length)]
    }

    skip() {
        this.newCountry()
        this.skips++
    }

    guess() {
        if (this.selected !== this.country) {
            this.incorrect++
            return false
        }
        this.newCountry()
        this.correct++
        return true
    }

    onClick() {
        if (!this.selected) return

        console.log(this)
        console.log(this.guess())
    }
}

export default GuessGame