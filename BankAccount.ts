import IBankAccount from "./IBankAccount";
import ITransferable, { TransferResult } from "./ITransferable";
/*
*   @class BankAccount implements IBankAccount interface.
*   This class is responsible for encapsulating bank account operations.
*/
export default class BankAccount implements IBankAccount, ITransferable {
    constructor(private id: number, private balance: number) { }
    public getBalance(): number {
        return this.balance;
    }
    public deposit(amount: number): void {
        this.balance += amount;
    }
    public withdraw(amount: number): boolean {
        if (this.balance > amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
    public accountNumber(): number {
        return this.id;
    }
    public transferTo(destination: IBankAccount, amount: number): TransferResult {
        destination.deposit(amount);
        return {
            success: true,
            message: "sent successfully"
        }
    }
    public transferFrom(account: IBankAccount, targetAccount: IBankAccount, amount: number): TransferResult {
        if (account.getBalance() < amount) return {
            success: false,
            message: `Not enough bank balance from account number: ${account.accountNumber()}`,
        }
        account.withdraw(amount);
        // Tranfer to account
        return this.transferTo(targetAccount, amount);
    }
}