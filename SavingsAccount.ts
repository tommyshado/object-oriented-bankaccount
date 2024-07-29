import BankAccount from "./BankAccount";

export class SavingsAccount extends BankAccount {
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