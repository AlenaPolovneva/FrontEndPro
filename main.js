class BankAccount {
    constructor (initialBalance) {
        this.balance = initialBalance;
    }

    getBalance () {
        return this.balance;
    }

    deposit(amount) {
        if(amount > 0) {
            this.balance += amount;
        } else {
            console.log ('The deposit amount must be greater than 0.');
        }
    }

    withdraw(amount) {
        if(amount > this.balance) {
            console.log('Insufficient funds in the account');
        } else if(amount <= 0) {
            console.log ('The amount to withdraw must be greater than 0.');
        } else {
            this.balance -= amount;
        }
    }
}

const account1 = new BankAccount(1000);
console.log(account1.getBalance());
account1.deposit(500);
console.log(account1.getBalance());
account1.withdraw(200);
console.log(account1.getBalance());