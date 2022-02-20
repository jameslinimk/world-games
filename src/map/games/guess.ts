import { get } from "svelte/store"
import colors from "../../colors"
import { popups } from "../../componenets/popup"
import countryData from "../country-data"
import type MapGame from "./game"

class GuessGame implements MapGame {
    selected?: string
    countries: string[]
    country: string

    stats: { [key: string]: { display: string, value: number } }
    countryColors: { [key: string]: string }

    excludedCountries: string[]

    guesses: number
    maxGuesses: number

    end: boolean
    endedAt: number
    started: number

    helpBoxHTML: string

    constructor(public rerender: () => void, public rerenderCountry: (countryKey: string) => void) {
        this.countries = Object.keys(countryData).filter(key => key !== "World")
        this.country = this.countries[Math.floor(Math.random() * this.countries.length)]

        this.stats = {
            correct: {
                display: "✅ Correct",
                value: 0
            },
            semiCorrect: {
                display: "🟨 Semicorrect",
                value: 0
            },
            incorrect: {
                display: "⛔ Incorrect",
                value: 0
            },
            skips: {
                display: "⏩ Skipped",
                value: 0
            }
        }

        this.countryColors = {}

        this.excludedCountries = []

        this.guesses = 0
        this.maxGuesses = 2

        this.end = false
        this.endedAt = 0
        this.started = performance.now()

        this.helpBoxHTML = `To play is very simple. Just <strong>double</strong> click where you think the given country is. The black circles are used to select the smaller countries.
<br /><br />
You will have 3 guesses for each country, and infinite skips. After a skip or an incorrect guess, the game will tell you where the country is.
<br /><br />
You can move and zoom around the map using your mouse (scroll to zoom, drag with any button to move)
<br /><br />
At the end you will be graded based on how well you do`
    }

    private newCountry() {
        // -1 because of World
        if (this.excludedCountries.length === Object.keys(countryData).length - 1) {
            this.end = true
            this.endedAt = performance.now()
            return
        }

        const adjustedCountries = this.countries.filter(country => !this.excludedCountries.includes(country))
        this.country = adjustedCountries[Math.floor(Math.random() * adjustedCountries.length)]
    }

    skip() {
        const adjustedCountries = this.countries.filter(country => !this.excludedCountries.includes(country))
        if (adjustedCountries.length === 1) {
            console.log("No more countries to skip")
            return get(popups).add("There is no more countries to skip!")
        }

        this.stats.skips.value++
        this.guesses = 0

        this.excludedCountries.push(this.country)
        this.countryColors[this.country] = colors.skipped

        this.rerenderCountry(this.country)
        this.newCountry()
        this.rerender()

        get(popups).add("Skipped!", 2000, "bg-yellow-400")
    }

    private guess() {
        if (!this.selected) return

        if (this.selected !== this.country) {
            /* --------------------------------- Guessed -------------------------------- */
            this.guesses++
            if (this.guesses > this.maxGuesses) {
                /* ---------------------------------- Lost ---------------------------------- */
                this.stats.incorrect.value++
                this.guesses = 0

                this.excludedCountries.push(this.country)
                this.countryColors[this.country] = colors.incorrect

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
            this.stats.semiCorrect.value++
            this.countryColors[this.country] = colors.semiCorrect
        } else {
            this.stats.correct.value++
            this.countryColors[this.country] = colors.correct
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
        if (this.excludedCountries.includes(this.selected)) return get(popups).add("You already got this place!")

        this.guess()
        this.rerender()
    }

    private grade(score: number) {
        if (score < 0 || score > 100) return "F-"
        if (score === 100) return "A+"

        const decimal = score % 10
        score = Math.floor(score / 10)

        const scores = ["F", "F", "F", "F", "F", "F", "D", "C", "B", "A"]
        let grade = scores[score]

        if (grade != "F") {
            if (decimal <= 2) grade += "-"
            else if (decimal >= 8) grade += "+"
        }

        return grade
    }

    getEndStats() {
        const score = ((this.stats.correct.value + this.stats.semiCorrect.value / 2) / (Object.keys(countryData).length - 1)) * 100
        const grade = this.grade(score)

        return [
            {
                display: "🎓 Grade",
                value: `${grade} (${score}%)`
            },
            {
                display: "✅/⛔ Corr/Incorr",
                value: `${this.stats.correct.value} / ${this.stats.incorrect.value}`
            },
            {
                display: "🟨 Semicorr",
                value: this.stats.semiCorrect.value
            },
            {
                display: "⏩ Skipped",
                value: this.stats.skips.value
            }
        ]
    }
}

export default GuessGame