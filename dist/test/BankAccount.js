"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const BankAccount_1 = __importDefault(require("../BankAccount"));
const Bank_1 = __importDefault(require("../Bank"));
describe("BankAccount & Bank Unit Tests", function () {
    let account;
    let bank;
    beforeEach(() => {
        account = new BankAccount_1.default(1, 1000);
        bank = new Bank_1.default([]);
    });
    // Account Tests
    it("should get the bank balance", function () {
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
    // Bank Tests
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
});
