export default interface IBankAccount {
    getBalance(): number;
    deposit(amount: number): void;
    withdraw(amount: number): boolean;
    accountNumber(): number;
}