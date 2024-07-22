import BankAccount from "./BankAccount";
import IBankAccount from "./IBankAccount";

export default interface IBank {
    addAccount(account: BankAccount): boolean;
    getAccount(id: number): IBankAccount | boolean;
    getAllAccounts(): IBankAccount[];
}