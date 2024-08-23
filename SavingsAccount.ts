import BankAccount from "./BankAccount";
import ISavingsAccount from "./ISavingsAccount";

export class SavingsAccount extends BankAccount implements ISavingsAccount {
    /*
    ** @constructor: accountNumber variable does not have to be a private since it's inherited from class BankAccount
    ** @constructor: initialBalance variable does not have to be a private since it's inherited from class BankAccount
    */
    constructor(private interestRate: number, accountNumber: number, initialBalance: number) {
        super(accountNumber, initialBalance);
    };
    public addInterest(): void {
        this.deposit(this.getBalance() * this.interestRate / 100);
    }
}