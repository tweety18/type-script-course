export var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "Pending";
    OrderStatus["PROCESSING"] = "PROCESSING";
    OrderStatus["SHIPPED"] = "Shipped";
    OrderStatus["DELIVERED"] = "Delivered";
    OrderStatus["CANCELLED"] = "Canceled";
})(OrderStatus || (OrderStatus = {}));
export var PaymentType;
(function (PaymentType) {
    PaymentType["CREDIT_CARD"] = "CreditCard";
    PaymentType["PAY_PAL"] = "PayPal";
    PaymentType["BANK_TRANSFER"] = "BankTransfer";
    PaymentType["CASH_ON_DELIVERY"] = "CashOnDelivery";
})(PaymentType || (PaymentType = {}));
