# Object-Oriented-BankAccount
[![Node.js CI](https://github.com/tommyshado/object-oriented-bankaccount/actions/workflows/node.js.yml/badge.svg)](https://github.com/tommyshado/object-oriented-bankaccount/actions/workflows/node.js.yml)

## Overview

This project is a simple implementation of a bank account system using Object-Oriented Programming principles.

## Getting started

1. Clone Repository

```bash
git clone https://github.com/tommyshado/object-oriented-bankaccount.git
```

2. Navigate to the project directory:

```bash
cd object-oriented-bankaccount
```

3. Install all dependencies:

```bash
npm install
```

4. Run the tests to ensure that everything is working correctly:

```bash
npm test
```

## Features

* The `BankAccount` class represents a bank account with the following properties and methods:

    * `constructor(private id: number, private balance: number)`: A constructor that initializes the account with the given initial id and balance.
    * `balance`: A private property that holds the current balance of the account.
    * `id`: A private property that holds the ID of the account number.
    * `deposit(amount: number)`: A method that adds the specified amount to the account balance.
    * `withdraw(amount: number)`: A method that subtracts the specified amount from the account balance.
    * `getBalance()`: A method that returns the current balance of the account.

* The `Bank` class represents a bank and manages a collection of bank accounts. It provides the following methods:
    * `constructor(private account: IBankAccount[])`: A constructor to initialize the list of bank accounts.
    * `addAccount(account: BankAccount)`: Adds a new bank account to the bank by using the `BankAccount` class.
    * `getAccount(accountNumber: number)`: Retrieves a bank account by its account number.
    * `getAllAccounts()`: Returns an array of all bank accounts managed by the bank.

## Contributing

If you're interested in contributing to this project, please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.