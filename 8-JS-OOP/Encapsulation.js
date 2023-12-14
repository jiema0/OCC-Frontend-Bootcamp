// Create a Class
// Encapsulation

class BankAccount {
    constructor(accountNumber, balance) {
                // construct the initial value; once done, no longer used it
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
    }

    getAccountInfo() {
        return `Account number: ${this.accountNumber}, Balance: ${this.balance}`;
    }

}

const myAccount = new BankAccount('1234567890', 1000000000)
myAccount.deposit(5000000)
myAccount.withdraw(9999999)
console.log(myAccount.getAccountInfo());

const ninaAccount = new BankAccount('9876543210', 10000)
ninaAccount.deposit(5000)
ninaAccount.withdraw(9999)
console.log(ninaAccount.getAccountInfo());