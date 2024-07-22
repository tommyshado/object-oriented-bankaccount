import assert from "assert";
import BankAccount from "../BankAccount";
import Bank from "../Bank";

let account = new BankAccount({
    id: 1,
    amount: 1000,
});
describe("BankAccount Implementation", function () {
    it("should get the bank balance", function () {
        assert.equal(1000, account.getBalance().amount);
    });
    it("should add money into the bank account", function () {
        account.deposit(500);
        assert.equal(1500, account.getBalance().amount);
    });
    it("should withdraw money from the bank account", function () {
        account.withdraw(100);
        account.withdraw(200);
        assert.equal(1200, account.getBalance().amount);
    });
});

let bank = new Bank([]);
describe("Bank Implementation", function () {
    it("should add an account", function () {
        const results = bank.addAccount(
            new BankAccount({
                id: 1,
                amount: 500,
            })
        );
        assert.equal(true, results);
        // Add another account
        bank.addAccount(
            new BankAccount({
                id: 2,
                amount: 1500,
            })
        );
        bank.addAccount(
            new BankAccount({
                id: 2,
                amount: 1500,
            })
        );
        assert.equal(2, bank.getAllAccounts().length);
    });
    it("should get a specific account", function () {
        bank.addAccount(
            new BankAccount({
                id: 1,
                amount: 2000,
            })
        );
        bank.addAccount(
            new BankAccount({
                id: 2,
                amount: 1500,
            })
        );
        assert.deepEqual(
            {
                balance: {
                    id: 2,
                    amount: 1500,
                },
            },
            bank.getAccount(2)
        );
    });
});
