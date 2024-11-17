export enum OrderStatus {
    PENDING = 'Pending',
    PROCESSING = 'PROCESSING',
    SHIPPED = 'Shipped',
    DELIVERED = 'Delivered',
    CANCELLED = 'Canceled'
}

export enum PaymentType {
    CREDIT_CARD = 'CreditCard',
    PAY_PAL = 'PayPal',
    BANK_TRANSFER = 'BankTransfer',
    CASH_ON_DELIVERY = 'CashOnDelivery'
}

export interface Order {
    id: string,
    amount: number,
    status: OrderStatus,
    paymentType: PaymentType
}
