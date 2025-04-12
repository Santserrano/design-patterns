import { PaymentService } from '../src/index';
import { IPaymentProcessor } from '../src/interfaces/IPaymentProcessor';

describe('PaymentService', () => {
  let mockPaymentProcessor: jest.Mocked<IPaymentProcessor>;
  let paymentService: PaymentService;

  beforeEach(() => {
    mockPaymentProcessor = {
      processPayment: jest.fn(),
      verifytransaction: jest.fn().mockReturnValue(true),
    };
    paymentService = new PaymentService(mockPaymentProcessor);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('executePayment', () => {
    it('should call processPayment on the payment processor', () => {
      const amount = 100;
      paymentService.executePayment(amount);

      expect(mockPaymentProcessor.processPayment).toHaveBeenCalledWith(amount);
    });
  });

  describe('verifyPayment', () => {
    it('should call verifyTransaction on the payment processor', () => {
      const transactionId = 'test-transaction-123';
      paymentService.verifyPayment(transactionId);

      expect(mockPaymentProcessor.verifytransaction).toHaveBeenCalledWith(
        transactionId
      );
    });

    it('should log the verification result', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      const transactionId = 'test-transaction-123';
      mockPaymentProcessor.verifytransaction.mockReturnValue(true);

      paymentService.verifyPayment(transactionId);

      expect(consoleSpy).toHaveBeenCalledWith(
        `Transaction ${transactionId} is valid`
      );
    });
  });
});