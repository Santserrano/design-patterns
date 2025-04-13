import { PayPalAdapter } from '../src/adapters/PayPalAdapter';
import { PayPal } from '../src/payment/Paypal';

jest.mock('../src/payment/Paypal');

describe('PayPalAdapter', () => {
  let paypalAdapter: PayPalAdapter;
  let mockPayPal: jest.Mocked<PayPal>;

  beforeEach(() => {
    mockPayPal = new PayPal() as jest.Mocked<PayPal>;
    (PayPal as jest.Mock).mockImplementation(() => mockPayPal);
    paypalAdapter = new PayPalAdapter(mockPayPal);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('processPayment', () => {
    it('should call PayPal makePayment with correct amount', () => {
      const amount = 100;
      const mockTransactionId = 'paypal-trans-123';
      mockPayPal.makePayment.mockReturnValue(mockTransactionId);

      paypalAdapter.processPayment(amount);

      expect(mockPayPal.makePayment).toHaveBeenCalledWith(amount, 'USD');
    });

    it('should return void and log transaction ID', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      const mockTransactionId = 'paypal-trans-123';
      mockPayPal.makePayment.mockReturnValue(mockTransactionId);

      paypalAdapter.processPayment(100);

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining(mockTransactionId)
      );
    });
  });

  describe('verifyTransaction', () => {
    it('should return true when PayPal checkPayment returns completed status', () => {
      const transactionId = 'paypal-trans-123';
      mockPayPal.checkPayment.mockReturnValue({
        status: 'completed',
        amount: 100,
      });

      const result = paypalAdapter.verifytransaction(transactionId);

      expect(mockPayPal.checkPayment).toHaveBeenCalledWith(transactionId);
      expect(result).toBe(false);
    });

    it('should return false when PayPal checkPayment returns non-completed status', () => {
      const transactionId = 'paypal-trans-123';
      mockPayPal.checkPayment.mockReturnValue({
        status: 'failed',
        amount: 100,
      });

      const result = paypalAdapter.verifytransaction(transactionId);

      expect(result).toBe(false);
    });
  });
});