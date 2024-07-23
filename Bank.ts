import IBankAccount from "./IBankAccount";
import IBank from "./IBank";
import BankAccount from "./BankAccount";

export default class Bank implements IBank {
    constructor(private account: IBankAccount[]) {}
    public addAccount(account: BankAccount): boolean {
        const foundAccount = this.getAccount(account.accountNumber());    
        if (foundAccount) return false;
        this.account.push(account);
        return true;
    }
    public getAccount(id: number): IBankAccount | boolean {
        for(let i = 0; i < this.account.length; i++) {
            if (this.account[i].accountNumber() === id) {
                return this.account[i];
            }
        }
        return false;
    }
    public getAllAccounts(): IBankAccount[] {
        return this.account;
    }
}