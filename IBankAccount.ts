import { IBalance } from "./IBalance";

export default interface IBankAccount {
    getBalance(): IBalance;
    deposit(amount: number): void;
    withdraw(amount: number): boolean;
}