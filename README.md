# Payment System with Factory Patterns

Цей проєкт демонструє реалізацію платіжної системи з динамічним вибором провайдера за допомогою патернів «Factory Method» та «Abstract Factory».

## Структура проєкту

```
src/
  core/
    PaymentProvider.ts          # Інтерфейс провайдера платежів
    PaymentProviderFactory.ts   # Інтерфейс фабрики провайдера
  providers/
    stripe/
      StripePaymentProvider.ts  # Реалізація PaymentProvider для Stripe
      StripeFactory.ts          # Фабрика Stripe
    paypal/
      PayPalPaymentProvider.ts  # Реалізація PaymentProvider для PayPal
      PayPalFactory.ts          # Фабрика PayPal
    apple/
      ApplePayPaymentProvider.ts# Реалізація PaymentProvider для ApplePay
      ApplePayFactory.ts        # Фабрика ApplePay
  app/
    PaymentContext.ts           # Контекст обробки платежу
  models/
    User.ts                     # (Опційно для інших ДЗ)
  services/
    ...                         # (Опційно для інших ДЗ)
  main.ts                      # Точка входу: вибір провайдера та обробка

.gitignore                      # Ігнорує node_modules та інші артефакти
package.json, tsconfig.json     # Налаштування TypeScript та npm
```

## Використані патерни

- **Factory Method** — визначення інтерфейсу для створення об’єкта, делегування створення підкласам.
- **Abstract Factory** — групування фабрик (через PaymentContext) для отримання сімейства об’єктів.

## Запуск проєкту

### Встановлення залежностей та ініціалізація

```bash
npm install
npm install --save-dev typescript ts-node @types/node
npx tsc --init
``` 

### Динамічний вибір провайдера

#### Stripe
```bash
npx ts-node src/main.ts stripe
```
Виведення:
```
[Stripe] Authorizing $100
[Stripe] Capturing transaction tx-001
[Stripe] Refunding transaction tx-001
```

#### PayPal
```bash
npx ts-node src/main.ts paypal
```
Виведення:
```
[PayPal] Authorizing $100
[PayPal] Capturing transaction tx-001
[PayPal] Refunding transaction tx-001
```

#### ApplePay
```bash
npx ts-node src/main.ts applepay
```
Виведення:
```
[ApplePay] Authorizing $100
[ApplePay] Capturing transaction tx-001
[ApplePay] Refunding transaction tx-001
```

*За замовчуванням: `amount = 100`, `transactionId = tx-001`.*

---

© 2025 Payment System with Factory Patterns




# Домашнє завдання до Теми Породжувальні патерни: Фабрика й Абстрактна фабрика

У реальних застосунках робота з платіжними системами — це завжди про змінність, залежності й масштабованість. У цьому завданні ви навчитеся відділяти створення об’єктів від їх використання за допомогою **патернів Factory Method і Abstract Factory**, що дає змогу будувати гнучкі, модульні та розширювані системи. Це базовий крок до створення архітектур, які легко адаптуються під зміну бізнес-вимог і технологій.

### Опис завдання

Необхідно реалізувати імітаційну архітектуру платіжної системи, яка підтримує кілька провайдерів: `Stripe`, `PayPal` і `ApplePay`. Кожен провайдер реалізує однакову функціональність: `authorize → capture → refund`.

Завдання полягає в застосуванні патернів Factory Method та Abstract Factory, щоб:

- відокремити логіку створення об’єктів;
- спростити розширення системи новими провайдерами;
- приховати використання `new` за фабричним шаром.

Це завдання не передбачає використання реальних платіжних систем чи SDK. Реалізація платіжних сервісів є імітацією і виконується через `console.log`.

Приклад:

```tsx
console.log(`[Stripe] Authorizing $${amount}`);
...
console.log(`[ApplePay] Refunding transaction ${transactionId}`);
```

### Завдання

## Структура проєкту

```
/src
  /core
    PaymentProvider.ts        # Інтерфейс платіжного провайдера
    PaymentProviderFactory.ts # Інтерфейс фабрики провайдерів
  /providers
    /stripe
      StripePaymentProvider.ts # Реалізація Stripe провайдера
      StripeFactory.ts         # Фабрика для Stripe
    /paypal
      PaypalPaymentProvider.ts # Реалізація PayPal провайдера
      PaypalFactory.ts         # Фабрика для PayPal
    /apple
      ApplePaymentProvider.ts  # Реалізація Apple Pay провайдера
      AppleFactory.ts          # Фабрика для Apple Pay
  /app
    PaymentContext.ts         # Контекст для роботи з провайдерами
  main.ts                    # Приклад використання
package.json
tsconfig.json
```

### Очікуваний результат

- Усі класи `XxxPaymentProvider` реалізують `PaymentProvider`;
- Усі класи `XxxFactory` реалізують `PaymentProviderFactory`;
- Клас `PaymentContext` працює з будь-якою фабрикою через інтерфейс;
- В `main.ts` реалізовано сценарій повного платіжного циклу з обраним провайдером;
- Весь код типізовано, він не використовує `new` поза фабриками, і легко розширюється.

## Застосовані патерни

### Factory Method

- Використовується для створення конкретних платіжних провайдерів
- Кожен провайдер (Stripe, PayPal, Apple Pay) має свою фабрику
- Фабрики реалізують інтерфейс `PaymentProviderFactory`

### Abstract Factory

- Інтерфейс `PaymentProviderFactory` визначає спосіб створення провайдерів
- Дозволяє створювати сімейства пов'язаних об'єктів
- Забезпечує можливість легко додавати нові провайдери

## Запуск проекту

```bash
# Запуск з Stripe провайдером
npx ts-node src/main.ts stripe

# Запуск з PayPal провайдером
npx ts-node src/main.ts paypal

# Запуск з Apple Pay провайдером
npx ts-node src/main.ts apple
```

При запуску програма:

1. Створює відповідну фабрику провайдера
2. Ініціалізує контекст платежів
3. Виконує повний цикл операцій (authorize, capture, refund)
