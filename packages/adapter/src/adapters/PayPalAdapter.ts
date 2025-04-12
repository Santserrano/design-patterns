
import { IPaymentProcessor } from '../interfaces/IPaymentProcessor';
import { PayPal } from '../payment/Paypal'; // Adjust the path as needed
// The PayPalAdapter class implements the IPaymentProcessor interface and adapts the PayPal payment processing system to fit the interface.


export class PayPalAdapter implements IPaymentProcessor {
    private paypal: PayPal;

    constructor(paypal: PayPal) {
        this.paypal = new PayPal();
    }
    processPayment(amont: number): void {
        const transactionId = this.paypal.makePayment(amont);
        console.log(`Payment processed with PayPal. Transaction ID: ${transactionId}`);
    }

    verifytransaction(transactionId: string): boolean {
        const result = this.paypal.checkTransaction(transactionId);
        return result.status === 'Completed';
    }
}

