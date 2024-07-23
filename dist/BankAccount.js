"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
*   @class BankAccount implements IBankAccount interface.
*   This class is responsible for encapsulating bank account operations.
*/
class BankAccount {
    constructor(id, balance) {
        this.id = id;
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance > amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
    accountNumber() {
        return this.id;
    }
}
exports.default = BankAccount;
