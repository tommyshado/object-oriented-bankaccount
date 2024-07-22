"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const BankAccount_1 = __importDefault(require("../BankAccount"));
const Bank_1 = __importDefault(require("../Bank"));
let account = new BankAccount_1.default({
    id: 1,
    amount: 1000,
});
describe("BankAccount Implementation", function () {
    it("should get the bank balance", function () {
        assert_1.default.equal(1000, account.getBalance().amount);
    });
    it("should add money into the bank account", function () {
        account.deposit(500);
        assert_1.default.equal(1500, account.getBalance().amount);
    });
    it("should withdraw money from the bank account", function () {
        account.withdraw(100);
        account.withdraw(200);
        assert_1.default.equal(1200, account.getBalance().amount);
    });
});
let bank = new Bank_1.default();
describe("Bank Implementation", function () {
    it("should add an account", function () {
        const results = bank.addAccount(new BankAccount_1.default({
            id: 1,
            amount: 500,
        }));
        assert_1.default.equal(true, results);
        // Add another account
        bank.addAccount(new BankAccount_1.default({
            id: 2,
            amount: 1500,
        }));
        bank.addAccount(new BankAccount_1.default({
            id: 2,
            amount: 1500,
        }));
        assert_1.default.equal(2, bank.getAllAccounts().length);
    });
    it("should get a specific account", function () {
        bank.addAccount(new BankAccount_1.default({
            id: 1,
            amount: 2000,
        }));
        bank.addAccount(new BankAccount_1.default({
            id: 2,
            amount: 1500,
        }));
        assert_1.default.deepEqual({
            balance: {
                id: 2,
                amount: 1500,
            },
        }, bank.getAccount(2));
    });
});
