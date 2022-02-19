import { writable } from "svelte/store"

class Popups {
    popups: { [key: string]: { message: string, delay: number, color: string } }
    id: number
    constructor() {
        this.popups = {}
        this.id = 0
    }

    remove(id: string) {
        delete this.popups[id]
        popups.update((v) => v)
    }

    add(message: string, delay = 2000, color = "bg-white") {
        this.popups[this.id] = { message, delay, color }
        this.id += 1
        popups.update((v) => v)
    }
}

const popups = writable(new Popups())

export {
    Popups,
    popups
}