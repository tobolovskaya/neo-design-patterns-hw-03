// TODO: Implement the PaypalFactory class
import { PaymentProviderFactory } from "../../core/PaymentProviderFactory";
import { PaymentProvider } from "../../core/PaymentProvider";
import { PayPalPaymentProvider } from "./PaypalPaymentProvider";

export class PayPalFactory implements PaymentProviderFactory {
  createPaymentProvider(): PaymentProvider {
    return new PayPalPaymentProvider();
  }
}