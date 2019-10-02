class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        return this
    }

    guess() {
        return this.min + Math.ceil((this.max - this.min) * 0.5)
    }

    lower() {
        return this.setRange(this.min, this.guess());
    }

    greater() {
        return this.setRange(this.guess(), this.max);
    }
}

module.exports = GuessingGame;
