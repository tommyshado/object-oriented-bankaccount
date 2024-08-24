import IBankAccount from "./IBankAccount";
import IBank from "./IBank";
import BankAccount from "./BankAccount";
import { TransferResult } from "./ITransferable";
/*
 *   @Class Bank implements IBank interface.
 *   The Bank class is responsible for managing a collection of bank accounts.
 *   It recieves the bank accounts from BankAccount class and stores them in an array of bankAccounts objects.
 */
export default class Bank implements IBank {
  constructor(private account: IBankAccount[]) {}
  public addAccount(account: BankAccount): boolean {
    const foundAccount = this.getAccount(account.accountNumber());
    if (foundAccount) return false;
    this.account.push(account);
    return true;
  }
  public removeAccount(accountNumber: number): boolean {
    const foundAccount = this.getAccount(accountNumber);
    if (foundAccount) {
      const idx = this.account.indexOf(foundAccount as BankAccount);
      if (idx !== -1) {
        this.account.splice(idx, 1);
        return true;
      }
    }
    return false;
  }
  public getAccount(accountNumber: number): IBankAccount | boolean {
    for (let i = 0; i < this.account.length; i++) {
      if (this.account[i].accountNumber() === accountNumber) {
        return this.account[i];
      }
    }
    return false;
  }
  public getAllAccounts(): IBankAccount[] {
    return this.account;
  }
  public getBalance(accountNumber: number): number | undefined {
    const foundAccount = this.getAccount(accountNumber);
    if (foundAccount) {
      const idx = this.account.indexOf(foundAccount as BankAccount);
      if (idx !== -1) {
        return this.account[idx].getBalance();
      }
    }
    return undefined;
  }
  public makeDeposit(accountNumber: number, amount: number): boolean {
    const foundAccount = this.getAccount(accountNumber);
    if (foundAccount) {
      const idx = this.account.indexOf(foundAccount as BankAccount);
      if (idx !== -1) {
        this.account[idx].deposit(amount);
        return true;
      }
      return false;
    }
    return false;
  }
  public withdrawal(accountNumber: number, amount: number): boolean {
    const foundAccount = this.getAccount(accountNumber);
    if (foundAccount) {
      const idx = this.account.indexOf(foundAccount as BankAccount);
      if (idx !== -1) {
        this.account[idx].withdraw(amount);
        return true;
      }
      return false;
    }
    return false;
  }
  public transferAmount(
    accountToTransferFrom: BankAccount,
    accountToTransferTo: BankAccount,
    amount: number
  ): TransferResult | undefined {
    const foundAccount = this.getAccount(accountToTransferFrom.accountNumber());
    if (foundAccount) {
      const idx = this.account.indexOf(foundAccount as BankAccount);
      if (idx !== -1) {
        return accountToTransferFrom.transferFrom(
          accountToTransferFrom,
          accountToTransferTo,
          amount
        );
      }
    }
  }
}
