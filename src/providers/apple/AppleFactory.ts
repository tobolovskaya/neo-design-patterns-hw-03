// TODO: Implement the AppleFactory class
import { PaymentProviderFactory } from "../../core/PaymentProviderFactory";
import { PaymentProvider } from "../../core/PaymentProvider";
import { ApplePayPaymentProvider } from "./ApplePaymentProvider";

export class ApplePayFactory implements PaymentProviderFactory {
  createPaymentProvider(): PaymentProvider {
    return new ApplePayPaymentProvider();
  }
}
