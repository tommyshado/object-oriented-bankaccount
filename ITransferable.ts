import IBankAccount from "./IBankAccount";

export interface TransferResult {
    success: boolean;
    message: string;
}
export default interface ITransferable {
    transferTo(destination: IBankAccount, amount: number): TransferResult;
    transferFrom(account: IBankAccount,targetAccount: IBankAccount, amount: number): TransferResult;
}