"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        this.balance.amount += amount;
    }
    withdraw(amount) {
        if (this.balance.amount > amount) {
            this.balance.amount -= amount;
            return true;
        }
        return false;
    }
}
exports.default = BankAccount;
