"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingsAccount = void 0;
const BankAccount_1 = __importDefault(require("./BankAccount"));
class SavingsAccount extends BankAccount_1.default {
    /*
    ** @constructor: accountNumber variable does not have to be a private since it's inherited from class BankAccount
    ** @constructor: initialBalance variable does not have to be a private since it's inherited from class BankAccount
    */
    constructor(interestRate, accountNumber, initialBalance) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }
    ;
    addInterest() {
        this.deposit(this.getBalance() * this.interestRate / 100);
    }
}
exports.SavingsAccount = SavingsAccount;
