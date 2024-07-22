import { IBalance } from "./IBalance";
import IBankAccount from "./IBankAccount";

export default class BankAccount implements IBankAccount {
    constructor(private balance: IBalance) { }
    public getBalance(): IBalance {
        return this.balance;
    }
    public deposit(amount: number): void {
        this.balance.amount += amount;
    }
    public withdraw(amount: number): boolean {
        if (this.balance.amount > amount) {
            this.balance.amount -= amount;
            return true;
        }
        return false;
    }
}