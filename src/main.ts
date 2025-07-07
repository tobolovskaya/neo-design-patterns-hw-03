import { StripeFactory } from "./providers/stripe/StripeFactory";
import { PayPalFactory } from "./providers/paypal/PaypalFactory";
import { ApplePayFactory } from "./providers/apple/AppleFactory";
import { PaymentContext } from "./app/PaymentContext";

// Отримуємо провайдера з командного рядка
const provider = process.argv[2]?.toLowerCase();
if (!provider) {
  console.error('Будь ласка, вкажіть провайдера: stripe, paypal або applepay');
  process.exit(1);
}

// Створюємо відповідну фабрику
let factory;
switch (provider) {
  case "stripe":
    factory = new StripeFactory();
    break;
  case "paypal":
    factory = new PayPalFactory();
    break;
  case "apple":
    factory = new ApplePayFactory();
    break;
  default:
    console.error(`Unknown provider: ${provider}. Using Stripe as default.`);
    process.exit(1);
    factory = new StripeFactory();
}

// Створюємо контекст та обробляємо платіж
const context = new PaymentContext(factory);
context.processPayment(100, 'tx-001');

// Приклад параметрів: сума та ідентифікатор транзакції
const amount = parseFloat(process.argv[3] || '100');
const transactionId = process.argv[4] || 'tx-001';

context.processPayment(amount, transactionId);
