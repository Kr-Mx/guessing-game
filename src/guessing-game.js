class GuessingGame {

    constructor() {

    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.trunc((this.setRange())*0.5)
    }

    lower() {
        return this.min=Math.trunc((this.setRange())*0.5);
    }

    greater() {
        return this.max=Math.trunc((this.setRange())*0.5);
    }
}

module.exports = GuessingGame;
