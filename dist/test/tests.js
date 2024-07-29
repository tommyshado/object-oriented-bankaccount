"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const BankAccount_1 = __importDefault(require("../BankAccount"));
const Bank_1 = __importDefault(require("../Bank"));
const SavingsAccount_1 = require("../SavingsAccount");
describe("Object-oriented BankAccount", function () {
    let account;
    let bank;
    let savingAccount;
    beforeEach(() => {
        account = new BankAccount_1.default(1, 1000);
        bank = new Bank_1.default([]);
        savingAccount = new SavingsAccount_1.SavingsAccount(7.5, 1, 1000);
    });
    describe("BankAccount tests", function () {
        it("should get the bank balance", function () {
            this.balanc;
            assert_1.default.equal(1000, account.getBalance());
        });
        it("should add money into the bank account", function () {
            account.deposit(500);
            assert_1.default.equal(1500, account.getBalance());
        });
        it("should withdraw money from the bank account", function () {
            account.withdraw(100);
            account.withdraw(200);
            assert_1.default.equal(700, account.getBalance());
        });
    });
    describe("Bank tests", function () {
        it("should add an account", function () {
            const results = bank.addAccount(new BankAccount_1.default(1, 500));
            assert_1.default.equal(true, results);
            // Add another account
            bank.addAccount(new BankAccount_1.default(2, 1500));
            bank.addAccount(new BankAccount_1.default(2, 1500));
            assert_1.default.equal(2, bank.getAllAccounts().length);
        });
        it("should remove a bank account", function () {
            const results = bank.addAccount(new BankAccount_1.default(1, 500));
            assert_1.default.equal(true, results);
            // Add another account
            bank.addAccount(new BankAccount_1.default(2, 1500));
            bank.removeAccount(2);
            assert_1.default.equal(1, bank.getAllAccounts().length);
        });
        it("should get a specific account", function () {
            bank.addAccount(new BankAccount_1.default(1, 2000));
            bank.addAccount(new BankAccount_1.default(2, 1500));
            assert_1.default.deepEqual({
                id: 2,
                balance: 1500,
            }, bank.getAccount(2));
        });
        it("should get a bank balance", function () {
            bank.addAccount(new BankAccount_1.default(1, 2000));
            bank.addAccount(new BankAccount_1.default(2, 1500));
            assert_1.default.equal(2000, bank.getBalance(1));
        });
        it("should make a deposit", function () {
            bank.addAccount(new BankAccount_1.default(1, 2000));
            bank.addAccount(new BankAccount_1.default(2, 1500));
            bank.makeDeposit(2, 500);
            assert_1.default.equal(2000, bank.getBalance(2));
        });
        it("should make a withdrawal", function () {
            bank.addAccount(new BankAccount_1.default(1, 2000));
            bank.addAccount(new BankAccount_1.default(2, 1500));
            bank.withdrawal(1, 200);
            assert_1.default.equal(1800, bank.getBalance(1));
        });
    });
    describe("SavingsAccount tests", function () {
        it("should get balance", function () {
            assert_1.default.equal(1000, savingAccount.getBalance());
        });
        it("should make a withdraw", function () {
            assert_1.default.equal(1000, savingAccount.getBalance());
            savingAccount.withdraw(300);
            assert_1.default.equal(700, savingAccount.getBalance());
        });
        it("should make a deposit", function () {
            assert_1.default.equal(1000, savingAccount.getBalance());
            savingAccount.deposit(300);
            assert_1.default.equal(1300, savingAccount.getBalance());
        });
    });
});
