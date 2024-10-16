// Створи функцію-конструктор BankAccount,
// яка використовує замикання для створення приватних змінних
// (наприклад, баланс рахунку). Функція повинна мати методи deposit, withdraw, і getBalance,
// які дозволяють взаємодіяти з цими змінними, не надаючи прямий доступ до них.
// Переконайся, що зміна балансу можлива лише через методи deposit та withdraw.
function BankAccount() {
    let balance = 0;
    this.deposit = function (value) {
        balance += value;
        return balance;
    };
    this.withdraw = function (value) {
        if (value > this.balance) {
            throw new Error('Insufficient funds');
        }
        balance -= value;
        return balance;
    };
    this.getBalance = function () {
        return balance;
    };
}
const account1 = new BankAccount();
// console.log(account1.deposit(100));
console.log(account1.deposit(100));
console.log(account1.withdraw(50));
console.log(account1.getBalance());
