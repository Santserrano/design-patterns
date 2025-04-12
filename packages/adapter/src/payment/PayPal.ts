export class PayPal {
    makePayment(amount: number, currency: string): string {
        // Implementation here
        return 'transaction-id';
    }

    checkPayment(transactionId: string): { status: string; amount: number } {
        // Implementation here
        return { status: 'completed', amount: 100 };
    }
}