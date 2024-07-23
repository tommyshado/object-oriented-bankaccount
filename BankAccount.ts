import IBankAccount from "./IBankAccount";

export default class BankAccount implements IBankAccount {
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
}