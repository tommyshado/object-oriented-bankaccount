import IBankAccount from "./IBankAccount";

export default interface IBank {
    addAccount(account: IBankAccount): boolean;
    removeAccount(accountNumber: number): boolean;
    getAccount(accountNumber: number): IBankAccount | boolean;
    getAllAccounts(): IBankAccount[];
    getBalance(accountNumber: number): number | undefined;
    makeDeposit(accountNumber: number, amount: number): boolean;
    withdrawal(accountNumber: number, amount: number): boolean;
}