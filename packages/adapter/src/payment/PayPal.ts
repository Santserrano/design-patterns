export class PayPal {
    makePayment(totalAmount: number, currency: string = 'USD'){
        console.log(`processing PauPal payment of ${totalAmount} ${currency} `);
        return `paypal-trnas-action-id-${Math.random().toString(36).substring(2,10)}` ;
    }
    checkTransaction(transactionId: string): {status: string; ammount: number}{
        console.log(`checking Paypal transaction ${transactionId}`);
        return {status: 'completed', ammount: 100} ;
    }

}