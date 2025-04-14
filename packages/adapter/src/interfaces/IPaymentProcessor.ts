export interface IPaymentProcessor {
    processPayment(amont: number): void;
    verifytransaction(transactionId: string): boolean;
}