import IBankAccount from "./IBankAccount";
import IBank from "./IBank";

export default class Bank implements IBank {
    constructor(private account: IBankAccount[]) {}
    public addAccount(account: IBankAccount): boolean {
        const foundAccount = this.getAccount(account.getBalance().id);    
        if (foundAccount) return false;
        this.account.push(account);
        return true;
    }
    public getAccount(id: number): IBankAccount | boolean {
        for(let i = 0; i < this.account.length; i++) {
            if (this.account[i].getBalance().id === id) {
                return this.account[i];
            }
        }
        return false;
    }
    public getAllAccounts() {
        return this.account;
    }
}