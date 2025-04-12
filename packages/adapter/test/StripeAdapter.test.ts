import { StripeAdapter } from '../src/adapters/StripeAdapter';
import { Stripe } from '../src/payment/Stripe';

jest.mock('../payment/Stripe');

describe('StripeAdapter', () => {
  let stripeAdapter: StripeAdapter;
  let mockStripe: jest.Mocked<Stripe>;

  beforeEach(() => {
    mockStripe = new Stripe() as jest.Mocked<Stripe>;
    (Stripe as jest.Mock).mockImplementation(() => mockStripe);
    stripeAdapter = new StripeAdapter(mockStripe);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('processPayment', () => {
    it('should call Stripe charge with amount in cents', () => {
      const amount = 100;
      const mockChargeId = 'stripe-charge-123';
      mockStripe.charge.mockReturnValue({ id: mockChargeId });

      stripeAdapter.processPayment(amount);

      expect(mockStripe.charge).toHaveBeenCalledWith(
        10000,
        'Adapted payment'
      );
    });

    it('should return void and log charge ID', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      const mockChargeId = 'stripe-charge-123';
      mockStripe.charge.mockReturnValue({ id: mockChargeId });

      stripeAdapter.processPayment(100);

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining(mockChargeId)
      );
    });
  });

  describe('verifyTransaction', () => {
    it('should return true when Stripe retrieveCharge returns paid true', () => {
      const chargeId = 'stripe-charge-123';
      mockStripe.retrieveCharge.mockReturnValue({
        paid: true,
        amount: 10000,
      });

      const result = stripeAdapter.verifytransaction(chargeId);

      expect(mockStripe.retrieveCharge).toHaveBeenCalledWith(chargeId);
      expect(result).toBe(true);
    });

    it('should return false when Stripe retrieveCharge returns paid false', () => {
      const chargeId = 'stripe-charge-123';
      mockStripe.retrieveCharge.mockReturnValue({
        paid: false,
        amount: 10000,
      });

      const result = stripeAdapter.verifytransaction(chargeId);

      expect(result).toBe(false);
    });
  });
});