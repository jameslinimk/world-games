import { get } from "svelte/store"
import { popups } from "../../componenets/popup"
import countryData from "../country-data"
import type { MapGame } from "./game"

class GuessGame implements MapGame {
    selected?: string
    countries: string[]
    country: string

    skips: number
    correct: number
    semiCorrect: number
    incorrect: number

    correctCountries: string[]
    semiCorrectCountries: string[]
    incorrectCountries: string[]

    excludedCountries: string[]

    guesses: number
    maxGuesses: number

    constructor(public rerender: () => void, public rerenderCountry: (countryKey: string) => void) {
        this.countries = Object.keys(countryData).filter(key => key !== "World")
        this.country = this.countries[Math.floor(Math.random() * this.countries.length)]

        this.skips = 0
        this.correct = 0
        this.semiCorrect = 0
        this.incorrect = 0

        this.correctCountries = []
        this.semiCorrectCountries = []
        this.incorrectCountries = []

        this.excludedCountries = []

        this.guesses = 0
        this.maxGuesses = 2
    }

    newCountry() {
        const adjustedCountries = this.countries.filter(country => !this.excludedCountries.includes(country))
        this.country = adjustedCountries[Math.floor(Math.random() * adjustedCountries.length)]
    }

    skip() {
        this.skips++
        this.guesses = 0

        this.excludedCountries.push(this.country)
        this.incorrectCountries.push(this.country)

        this.rerenderCountry(this.country)
        this.newCountry()
        this.rerender()

        get(popups).add("Skipped!", 2000, "bg-yellow-400")
    }

    guess() {
        if (!this.selected) return

        if (this.selected !== this.country) {
            /* --------------------------------- Guessed -------------------------------- */
            this.guesses++
            if (this.guesses > this.maxGuesses) {
                /* ---------------------------------- Lost ---------------------------------- */
                this.incorrect++
                this.guesses = 0

                this.excludedCountries.push(this.country)
                this.incorrectCountries.push(this.country)

                this.rerenderCountry(this.country)

                this.newCountry()

                get(popups).add("Better luck next time!", 2000, "bg-red-400")
                return false
            }

            get(popups).add("Incorrect", 2000, "bg-red-400")
            return false
        }

        /* --------------------------------- Correct -------------------------------- */
        if (this.guesses > 0) {
            this.semiCorrect++
            this.semiCorrectCountries.push(this.country)
        } else {
            this.correct++
            this.correctCountries.push(this.country)
        }
        this.excludedCountries.push(this.country)
        this.guesses = 0

        this.rerenderCountry(this.country)
        this.newCountry()

        get(popups).add("You got it!", 2000, "bg-green-400")
        return true
    }

    onClick() {
        if (!this.selected) return

        this.guess()
        this.rerender()
    }
}

export default GuessGame