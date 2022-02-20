interface MapGame {
    stats: { [key: string]: { display: string, value: number } }
    countryColors: { [key: string]: string }

    country: string
    selected?: string
    onClick: () => void

    rerenderCountry: (countryKey: string) => void
    rerender: () => void
    skip: () => void

    guesses: number
    maxGuesses: number

    end: boolean
    endedAt: number
    started: number
    getEndStats: () => { display: string, value: number | string }[]

    helpBoxHTML: string
}

export default MapGame