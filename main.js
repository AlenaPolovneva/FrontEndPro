let ladder= {
    step : 0,
    up: function () {// підніматиме вас на одну сходинку
        this.step++;
        return this;// Повертаємо сам об'єкт для можливості ланцюжкових викликів
    },
    down: function () {// опускатиме вас на одну сходинку
        this.step--;
        return this;
    },
    showStep: function () {// показує поточну сходинку
        console.log (this.step);
        return this;
    }
};
ladder.up().up().down().showStep(); // 1