"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const BankAccountImpl_1 = __importDefault(require("../BankAccountImpl"));
describe('BankAccount Implementation', function () {
    it('should get the bank balance', function () {
        const account = new BankAccountImpl_1.default(2500);
        const balance = account.getBalance();
        assert_1.default.equal(2500, balance);
    });
    it("should add money into the bank account", function () {
        const account = new BankAccountImpl_1.default(2500);
        account.deposit(500);
        const balance = account.getBalance();
        assert_1.default.equal(3000, balance);
    });
    it("should withdraw money from the bank account", function () {
        const account = new BankAccountImpl_1.default(2500);
        account.withdraw(100);
        const balance = account.getBalance();
        assert_1.default.equal(2400, balance);
    });
});
