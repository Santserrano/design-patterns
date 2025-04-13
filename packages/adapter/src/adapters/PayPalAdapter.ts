import { IPaymentProcessor } from '../interfaces/IPaymentProcessor';
import { PayPal } from '../payment/Paypal';

// The PayPalAdapter class implements the IPaymentProcessor interface and adapts the PayPal payment processing system to fit the interface.


export class PayPalAdapter implements IPaymentProcessor {
    private paypal: PayPal;

    constructor(paypal: PayPal) {
        this.paypal = paypal;
    }
    processPayment(amount: number): void {
        const transactionId = this.paypal.makePayment(amount, 'USD');
        console.log(`Payment processed with PayPal. Transaction ID: ${transactionId}`);
    }

    verifytransaction(transactionId: string): boolean {
        const result = this.paypal.checkPayment(transactionId);
        return result.status === 'Completed';
    }
}

