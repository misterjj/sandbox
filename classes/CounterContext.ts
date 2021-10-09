export default class CounterContext {
    private counter: number

    private readonly subscribes: {(number): void}[]

    constructor() {
        this.counter = 0
        this.subscribes = []
    }

    subscribe(fn : (number) => void): void {
        this.subscribes.push(fn)
    }

    private emit(): void {
        for (const fn of this.subscribes) {
            fn(this.counter)
        }
    }

    increment(): void {
        this.counter ++
        this.emit()
    }

    decrement(): void {
        this.counter --
        this.emit()
    }
}