import { IPaymentProcessor } from "../interfaces/IPaymentProcessor";
import { Stripe } from "../payment/Stripe"; // Adjust the path as needed

export class StripeAdapter implements IPaymentProcessor{
    private stripe: Stripe;

    constructor(stripe: Stripe){
        this.stripe= new Stripe();
    }

    processPayment(amont: number): void {
        const amountInCents = amont * 100; // Convert to cents
        const charge= this.stripe.charge(amountInCents, 'adapte payment');
        console.log(`Payment processed with charge Transaction ID: ${charge.id}`);
    }

    verifytransaction(transactionId: string): boolean {
        const charge = this.stripe.retrieveCharge(transactionId);
        return charge.paid;
    }
}