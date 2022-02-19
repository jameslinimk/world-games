interface MapGame {
    skips: number
    correct: number
    semiCorrect: number
    incorrect: number

    /**
     * Countries that will be labeled as correct
     */
    correctCountries: string[]
    /**
     * Countries that will be labeled and semiCorrect
     */
    semiCorrectCountries: string[]
    /**
     * Countries that will be labeled as incorrect
     */
    incorrectCountries: string[]

    country: string
    selected?: string
    onClick: () => void

    rerenderCountry: (countryKey: string) => void
    rerender: () => void
    skip: () => void

    guesses: number
    maxGuesses: number
}

export type {
    MapGame
}