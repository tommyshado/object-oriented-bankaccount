import assert from "assert";
import BankAccount from "../BankAccount";
import Bank from "../Bank";
import IBankAccount from "../IBankAccount";
import IBank from "../IBank";

describe("BankAccount & Bank Unit Tests", function () {
    let account: IBankAccount;
    let bank: IBank;
    beforeEach(() => {
        account = new BankAccount(1, 1000);
        bank = new Bank([]);
    });
    // Account Tests
    it("should get the bank balance", function () {
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
    // Bank Tests
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
});
