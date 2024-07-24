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
    removeAccount(accountNumber) {
        const foundAccount = this.getAccount(accountNumber);
        if (foundAccount) {
            const idx = this.account.indexOf(foundAccount);
            if (idx !== -1) {
                this.account.splice(idx, 1);
                return true;
            }
        }
        return false;
    }
    getAccount(accountNumber) {
        for (let i = 0; i < this.account.length; i++) {
            if (this.account[i].accountNumber() === accountNumber) {
                return this.account[i];
            }
        }
        return false;
    }
    getAllAccounts() {
        return this.account;
    }
    getBalance(accountNumber) {
        const foundAccount = this.getAccount(accountNumber);
        if (foundAccount) {
            const idx = this.account.indexOf(foundAccount);
            if (idx !== -1) {
                return this.account[idx].getBalance();
            }
        }
        return undefined;
    }
    makeDeposit(accountNumber, amount) {
        const foundAccount = this.getAccount(accountNumber);
        if (foundAccount) {
            const idx = this.account.indexOf(foundAccount);
            if (idx !== -1) {
                this.account[idx].deposit(amount);
                return true;
            }
            return false;
        }
        return false;
    }
    withdrawal(accountNumber, amount) {
        const foundAccount = this.getAccount(accountNumber);
        if (foundAccount) {
            const idx = this.account.indexOf(foundAccount);
            if (idx !== -1) {
                this.account[idx].withdraw(amount);
                return true;
            }
            return false;
        }
        return false;
    }
}
exports.default = Bank;
