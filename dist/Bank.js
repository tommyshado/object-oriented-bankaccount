"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
