import { Order, OrderStatus, PaymentType } from "./models/order-models.js";

const order1: Order = {
    id: '1',
    amount: 100,
    status: OrderStatus.DELIVERED,
    paymentType: PaymentType.BANK_TRANSFER
};

const order2: Order = {
    id: '2',
    amount: 200,
    status: OrderStatus.PENDING,
    paymentType: PaymentType.PAY_PAL
};

const updateOrderStatus = (order: Order, status: OrderStatus): void => {
    order.status = status;
    console.log(`Status was changed for order ${order.id}. Current status is ${order.status}`)
}

updateOrderStatus(order1, OrderStatus.PENDING);

const ordersArr: Order[] = [
    order1,
    order2,
    {
        id: '3',
        amount: 300,
        status: OrderStatus.PENDING,
        paymentType: PaymentType.PAY_PAL
    },
    {
        id: '4',
        amount: 400,
        status: OrderStatus.PENDING,
        paymentType: PaymentType.PAY_PAL
    },
    {
        id: '5',
        amount: 500,
        status: OrderStatus.CANCELLED,
        paymentType: PaymentType.PAY_PAL
    }
];

const getOrdersByStatus = (orders: Order[], status: OrderStatus): Order[] => {
    return orders.filter((item: Order) => item.status === status);
}

console.log(getOrdersByStatus(ordersArr, OrderStatus.PENDING));
