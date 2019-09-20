"use strict";

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

const account = {
  balance: 0,
  transactions: [],

  idAssign() {
    for (let i = 0; i < this.transactions.length; i += 1) {
      this.transactions[i].id = `tr-${this.transactions.indexOf(
        this.transactions[i]
      ) + 1}`;
    }
  },

  deposit(amount) {
    this.balance += amount;
    const transaction = {
      id: "",
      type: Transaction.DEPOSIT,
      amount: amount
    };
    this.addTransaction(transaction);
    this.idAssign();
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Снятие такой суммы невозможно, недостаточно средств");
      amount = 0;
      return;
    } else {
      this.balance -= amount;
      const transaction = {
        id: "",
        type: Transaction.WITHDRAW,
        amount: amount
      };
      this.addTransaction(transaction);
      this.idAssign();
    }
  },

  addTransaction(transaction) {
    this.transactions = this.transactions.concat(transaction);
  },

  getBalance() {
    console.log(this.balance);
  },

  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].id === id) {
        console.log(this.transactions[i]);
      }
    }
  },

  getTransactionTotal(type) {
    let total = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].type === type) {
        total += this.transactions[i].amount;
      }
    }
    console.log(total);
  }
};

account.deposit(300);
account.getBalance(); // 300
account.deposit(400);
account.getBalance(); // 700
account.withdraw(800);
account.getBalance(); // 700
account.withdraw(200);
account.getBalance(); // 500
account.deposit(1000);
account.getBalance(); // 1500
account.withdraw(300);
account.getBalance(); // 1200
account.withdraw(800);
account.getBalance(); // 400
account.deposit(200);
account.getBalance(); // 600
account.getTransactionDetails("tr-6");
account.getTransactionTotal("deposit"); //1900
account.getTransactionTotal("withdraw"); //1300
console.log(account.transactions);
