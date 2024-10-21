// Task 1
// Створи функцію-конструктор BankAccount,
// яка використовує замикання для створення приватних змінних
// (наприклад, баланс рахунку). Функція повинна мати методи deposit, withdraw, і getBalance,
// які дозволяють взаємодіяти з цими змінними, не надаючи прямий доступ до них.
// Переконайся, що зміна балансу можлива лише через методи deposit та withdraw.

function BankAccount() {
    let balance: number = 0;

    this.deposit = function(value: number): number {
        balance += value;
        return balance;
    };

    this.withdraw = function(value: number): number {
        if (value > balance) {
            throw new Error('Insufficient funds');
        }
        balance -= value;
        return balance;
    };

    this.getBalance = function(): number {
        return balance;
    };
}

const account1 = new BankAccount();
console.log(account1.deposit(100));
console.log(account1.withdraw(50));
console.log(account1.getBalance());
console.log(account1.withdraw(100)); //error
console.log(account1.getBalance());



// // Task 2
// // Створи клас EventManager, який використовує методи для обробки різних подій
// // (наприклад, on, off, trigger). Забезпеч, щоб кожен метод зберігав правильний контекст
// // виконання при використанні this у колбеках.
// //
// class EventManager {
//     event: () => void;
//     isTriggered: boolean = false;
//
//     constructor(event: () => void) {
//         this.event = event;
//     }
//
//     on(): void {
//         this.isTriggered = true;
//     }
//
//     off(): void {
//         this.isTriggered = false;
//     }
//
//     trigger = (): void => {
//         if (this.isTriggered) {
//             this.event();
//         } else {
//             console.log('Event is not triggered');
//         }
//     };
//
// }
//
// class Example {
//     name: string;
//
//     constructor(name: string) {
//         this.name = name;
//     }
//
//     //arrow function saves the context
//     // sayHello = ():void => {
//     //     console.log(`Hello, my name is ${this.name}`);
//     // }
//
//     sayHello(): void {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
//
// const example = new Example('Bob');
// const runner = new EventManager(example.sayHello);
// // if sayHello is not an arrow function, we need to bind the context
// // const runner = new EventManager(example.sayHello.bind(example));
//
//
// runner.trigger();
//
// runner.on();
// runner.trigger();
//
// runner.off();
// runner.trigger();
//
