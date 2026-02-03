# Sonyasha Payment QR Widget

Standalone JavaScript widget for generating NBU-compliant payment QR codes for Ukrainian banking apps.

**Zero dependencies. Works anywhere.**

## Quick Start

### Via jsDelivr CDN

```html
<div id="sonyasha-payment-widget"></div>
<script src="https://cdn.jsdelivr.net/gh/alya1992/sonyasha-payment-widget@main/payment-widget.min.js"></script>
<script>
SonyashaPaymentQR.configure({
    recipientName: 'ФОП Прізвище Імʼя По-батькові',
    iban: 'UA123456789012345678901234567',
    taxId: '1234567890'
});
SonyashaPaymentQR.init();
</script>
```

### Self-hosted

Download `payment-widget.min.js` and host it anywhere:

```html
<div id="sonyasha-payment-widget"></div>
<script src="/path/to/payment-widget.min.js"></script>
<script>
SonyashaPaymentQR.configure({
    recipientName: 'ФОП Прізвище Імʼя По-батькові',
    iban: 'UA123456789012345678901234567',
    taxId: '1234567890'
});
SonyashaPaymentQR.init();
</script>
```

## Complete Integration Example

```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Оплата замовлення</title>
</head>
<body>
    <h2>Замовлення #123</h2>
    <p class="order-summary-b">До сплати: 590 грн</p>

    <div id="sonyasha-payment-widget"></div>

    <script src="https://cdn.jsdelivr.net/gh/alya1992/sonyasha-payment-widget@main/payment-widget.min.js"></script>
    <script>
    SonyashaPaymentQR.configure({
        recipientName: 'ФОП Прізвище Імʼя По-батькові',
        iban: 'UA123456789012345678901234567',
        taxId: '1234567890',
        purposePrefix: 'За інтернет замовлення'
    });
    SonyashaPaymentQR.init();
    </script>
</body>
</html>
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `recipientName` | string | `''` | **Required.** Recipient name (ФОП/company name) |
| `iban` | string | `''` | **Required.** Ukrainian IBAN (29 characters) |
| `taxId` | string | `''` | **Required.** Tax ID (ЄДРПОУ/ІПН) |
| `purposePrefix` | string | `'За інтернет замовлення'` | Payment purpose prefix |
| `orderIdSelector` | string | `'.h2'` | CSS selector for order ID element |
| `amountSelector` | string | `'.order-summary-b'` | CSS selector for amount element |
| `containerSelector` | string | `'#sonyasha-payment-widget'` | CSS selector for widget container |
| `showBankSelection` | boolean | `false` | Show bank selection grid on mobile |

## Supported Banks (10)

- Monobank
- Приват24
- А-Банк
- ПУМБ
- Sense (Альфа-Банк)
- Укргазбанк
- Креді Агріколь
- ОТП Банк
- izibank
- Глобус

## How It Works

1. Widget parses page DOM to find order ID and amount
2. Generates NBU-compliant QR code locally (no server requests)
3. On mobile: shows bank deeplinks for quick payment
4. On desktop: shows QR code for scanning with bank app

## Files

| File | Size | Use Case |
|------|------|----------|
| `payment-widget.min.js` | 104KB | **Production** |
| `payment-widget.js` | 132KB | Development/Debugging |

## Features

- NBU Format 002 compliant QR codes
- 10 Ukrainian banks with iOS/Android deeplinks
- Platform detection (iOS/Android/Desktop)
- Responsive design
- Zero external dependencies (qr-code-styling bundled)
- No server requests - 100% client-side

## Browser Support

Chrome 60+, Firefox 55+, Safari 11+, Edge 79+, iOS Safari 11+, Chrome for Android 60+

## License

MIT License
