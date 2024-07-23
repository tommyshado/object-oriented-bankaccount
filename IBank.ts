import IBankAccount from "./IBankAccount";

export default interface IBank {
    addAccount(account: IBankAccount): boolean;
    getAccount(id: number): IBankAccount | boolean;
    getAllAccounts(): IBankAccount[];
}