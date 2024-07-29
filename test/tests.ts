import assert from "assert";
import BankAccount from "../BankAccount";
import Bank from "../Bank";
import IBankAccount from "../IBankAccount";
import IBank from "../IBank";
import { SavingsAccount } from "../SavingsAccount";

describe("Object-oriented BankAccount", function () {
    let account: IBankAccount;
    let bank: IBank;
    let savingAccount: any;
    beforeEach(() => {
        account = new BankAccount(1, 1000);
        bank = new Bank([]);
        savingAccount = new SavingsAccount(7.5, 1, 1000);
    });
    describe("BankAccount tests", function() {
        it("should get the bank balance", function () {this.balanc
            assert.equal(1000, account.getBalance());
        });
        it("should add money into the bank account", function () {
            account.deposit(500);
            assert.equal(1500, account.getBalance());
        });
        it("should withdraw money from the bank account", function () {
            account.withdraw(100);
            account.withdraw(200);
            assert.equal(700, account.getBalance());
        });
    });
    describe("Bank tests", function() {
        it("should add an account", function () {
            const results = bank.addAccount(new BankAccount(1, 500));
            assert.equal(true, results);
            // Add another account
            bank.addAccount(new BankAccount(2, 1500));
            bank.addAccount(new BankAccount(2, 1500));
            assert.equal(2, bank.getAllAccounts().length);
        });
        it("should remove a bank account", function() {
            const results = bank.addAccount(new BankAccount(1, 500));
            assert.equal(true, results);
            // Add another account
            bank.addAccount(new BankAccount(2, 1500));
            bank.removeAccount(2);
            assert.equal(1, bank.getAllAccounts().length);
        });
        it("should get a specific account", function () {
            bank.addAccount(new BankAccount(1, 2000));
            bank.addAccount(new BankAccount(2, 1500));
            assert.deepEqual(
                {
                    id: 2,
                    balance: 1500,
                },
                bank.getAccount(2)
            );
        });
        it("should get a bank balance", function() {
            bank.addAccount(new BankAccount(1, 2000));
            bank.addAccount(new BankAccount(2, 1500));
            assert.equal(2000, bank.getBalance(1));
        });
        it("should make a deposit", function() {
            bank.addAccount(new BankAccount(1, 2000));
            bank.addAccount(new BankAccount(2, 1500));
            bank.makeDeposit(2, 500);
            assert.equal(2000, bank.getBalance(2));
        });
        it("should make a withdrawal", function() {
            bank.addAccount(new BankAccount(1, 2000));
            bank.addAccount(new BankAccount(2, 1500));
            bank.withdrawal(1, 200);
            assert.equal(1800, bank.getBalance(1));
        });
    });
    describe("SavingsAccount tests", function() {
        it("should get balance", function() {
            assert.equal(1000, savingAccount.getBalance())
        });
        it("should make a withdraw", function() {
            assert.equal(1000, savingAccount.getBalance());
            savingAccount.withdraw(300);
            assert.equal(700, savingAccount.getBalance());
        });
        it("should make a deposit", function() {
            assert.equal(1000, savingAccount.getBalance());
            savingAccount.deposit(300);
            assert.equal(1300, savingAccount.getBalance());
        });
    })
});
