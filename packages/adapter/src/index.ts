import { IPaymentProcessor } from "./interfaces/IPaymentProcessor";
import { PayPalAdapter } from "./adapters/PayPalAdapter";
import { StripeAdapter } from "./adapters/StripeAdapter";
import { PayPal } from "@/payment/PayPal";
import { Stripe } from "./payment/Stripe";

export class PaymentService {
  constructor(private paymentProcessor: IPaymentProcessor) { }

  executePayment(amount: number): void {
    this.paymentProcessor.processPayment(amount);
  }

  verifyPayment(transactionId: string): void {
    const isValid = this.paymentProcessor.verifytransaction(transactionId);
    console.log(`Transaction ${transactionId} is ${isValid ? 'valid' : 'invalid'}`);
  }
}

// Uso con PayPal
console.log('=== Using PayPal via Adapter ===');
const paypal = new PayPal();
const paypalAdapter = new PayPalAdapter(paypal);
const paypalService = new PaymentService(paypalAdapter);
paypalService.executePayment(100);
paypalService.verifyPayment('paypal-trans-abc123');

console.log('\n=== Using Stripe via Adapter ===');
const stripe = new Stripe();
const stripeAdapter = new StripeAdapter(stripe);
const stripeService = new PaymentService(stripeAdapter);
stripeService.executePayment(100);
stripeService.verifyPayment('stripe-charge-xyz789');