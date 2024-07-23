"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
*   @Class Bank implements IBank interface.
*   The Bank class is responsible for managing a collection of bank accounts.
*   It recieves the bank accounts from BankAccount class and stores them in an array of bankAccounts objects.
*/
class Bank {
    constructor(account) {
        this.account = account;
    }
    addAccount(account) {
        const foundAccount = this.getAccount(account.accountNumber());
        if (foundAccount)
            return false;
        this.account.push(account);
        return true;
    }
    removeAccount(account) {
        const foundAccount = this.getAccount(account);
        if (foundAccount) {
            const idx = this.account.indexOf(foundAccount);
            if (idx !== -1) {
                this.account.splice(idx, 1);
                return true;
            }
        }
        return false;
    }
    getAccount(id) {
        for (let i = 0; i < this.account.length; i++) {
            if (this.account[i].accountNumber() === id) {
                return this.account[i];
            }
        }
        return false;
    }
    getAllAccounts() {
        return this.account;
    }
}
exports.default = Bank;
