export class Stripe{
    charge(amounInCents: number, description: string):{id: string}{
        console.log(`Stripe charge ${amounInCents} cents for ${description}`);
        return {id: `stripe-transaction-${Math.random().toString(36).substring(2,10)}`} ;
    }

    retrieveCharge(chargeId: string):{paid:boolean; amount: number }{
        console.log(`retrieving Stripe charge ${chargeId}`);
        return {paid: true, amount: 100} ;
    }
}