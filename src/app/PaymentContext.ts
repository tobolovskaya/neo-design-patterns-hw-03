import { PaymentProviderFactory } from "../core/PaymentProviderFactory";
import { PaymentProvider } from "../core/PaymentProvider";

export class PaymentContext {
  // TODO: Implement the PaymentContext class
  private provider: PaymentProvider;

  constructor(factory: PaymentProviderFactory) {
    this.provider = factory.createPaymentProvider();
  }

  processPayment(amount: number, transactionId: string): void {
    // 1. Authorize amount
    this.provider.authorize(amount);
    // 2. Capture funds
    this.provider.capture(transactionId);
    // 3. Refund if needed (simulated)
    this.provider.refund(transactionId);
  }
}
