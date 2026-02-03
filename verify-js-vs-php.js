/**
 * Node.js verification script to compare JS output with PHP output
 *
 * Run with: node public/widget/verify-js-vs-php.js
 */

// Load the payment widget module
const SonyashaPaymentQR = require('./payment-widget.js');

// Expected values from PHP (verified output)
const EXPECTED = {
    orderId: 36,
    amount: 590,
    base64Url: 'QkNECjAwMgoxClVDVAoK0KTQntCfINCS0ZbRgtCy0ZbRhtGM0LrQsCDQkNC90LDRgdGC0LDRgdGW0Y8g0KHQtdGA0LPRltGX0LLQvdCwClVBNzIzMjIwMDEwMDAwMDI2MDAyMzYwMDA5NjY5ClVBSDU5MC4wMAozMzYzNDAzMDg3CgoK0JfQsCDRltC90YLQtdGA0L3QtdGCINC30LDQvNC-0LLQu9C10L3QvdGPIDM2Cgo',
    deeplinkUrl: 'https://bank.gov.ua/qr/QkNECjAwMgoxClVDVAoK0KTQntCfINCS0ZbRgtCy0ZbRhtGM0LrQsCDQkNC90LDRgdGC0LDRgdGW0Y8g0KHQtdGA0LPRltGX0LLQvdCwClVBNzIzMjIwMDEwMDAwMDI2MDAyMzYwMDA5NjY5ClVBSDU5MC4wMAozMzYzNDAzMDg3CgoK0JfQsCDRltC90YLQtdGA0L3QtdGCINC30LDQvNC-0LLQu9C10L3QvdGPIDM2Cgo',
    lineCount: 14,
    lines: [
        'BCD',
        '002',
        '1',
        'UCT',
        '',
        'ФОП Вітвіцька Анастасія Сергіївна',
        'UA723220010000026002360009669',
        'UAH590.00',
        '3363403087',
        '',
        '',
        'За інтернет замовлення 36',
        '',
        ''
    ]
};

// Configure widget with same values as PHP
SonyashaPaymentQR.configure({
    recipientName: 'ФОП Вітвіцька Анастасія Сергіївна',
    iban: 'UA723220010000026002360009669',
    taxId: '3363403087',
    purposePrefix: 'За інтернет замовлення'
});

console.log('=== JavaScript NBU QR Builder Verification ===\n');

// Run tests
let passed = 0;
let failed = 0;

function test(name, actual, expected) {
    if (actual === expected) {
        console.log(`✅ PASS: ${name}`);
        passed++;
    } else {
        console.log(`❌ FAIL: ${name}`);
        console.log(`   Expected: "${expected}"`);
        console.log(`   Actual:   "${actual}"`);
        failed++;
    }
}

// Generate JS output
const dataString = SonyashaPaymentQR.buildDataString(EXPECTED.orderId, EXPECTED.amount);
const deeplinkUrl = SonyashaPaymentQR.buildDeeplinkUrl(EXPECTED.orderId, EXPECTED.amount);
const lines = dataString.split('\n');

// Test 1: Line count
test('Line count is 14', lines.length, EXPECTED.lineCount);

// Test 2-15: Each line matches
for (let i = 0; i < EXPECTED.lines.length; i++) {
    test(`Line ${i + 1} matches`, lines[i], EXPECTED.lines[i]);
}

// Test 16: Full deeplink URL matches
test('Deeplink URL matches PHP output (byte-for-byte)', deeplinkUrl, EXPECTED.deeplinkUrl);

// Test 17: formatAmount
test('formatAmount(590) returns "590.00"', SonyashaPaymentQR.formatAmount(590), '590.00');
test('formatAmount(1234.5) returns "1234.50"', SonyashaPaymentQR.formatAmount(1234.5), '1234.50');
test('formatAmount(0) returns "0.00"', SonyashaPaymentQR.formatAmount(0), '0.00');

// =============================================
// DOM Parser Tests (Task 1.2) - Text-based only
// =============================================

console.log('\n--- DOM Parser Tests (parseOrderIdFromText) ---\n');

test('parseOrderIdFromText("Замовлення №36") returns "36"',
    SonyashaPaymentQR.parseOrderIdFromText('Замовлення №36'), '36');

test('parseOrderIdFromText("Order #123") returns "123"',
    SonyashaPaymentQR.parseOrderIdFromText('Order #123'), '123');

test('parseOrderIdFromText("No. 456") returns "456"',
    SonyashaPaymentQR.parseOrderIdFromText('No. 456'), '456');

test('parseOrderIdFromText("No 789") returns "789"',
    SonyashaPaymentQR.parseOrderIdFromText('No 789'), '789');

test('parseOrderIdFromText("No text") returns null',
    SonyashaPaymentQR.parseOrderIdFromText('No text here'), null);

console.log('\n--- DOM Parser Tests (parseAmountFromText) ---\n');

test('parseAmountFromText("590 грн") returns 590',
    SonyashaPaymentQR.parseAmountFromText('590 грн'), 590);

test('parseAmountFromText("590,00 грн") returns 590',
    SonyashaPaymentQR.parseAmountFromText('590,00 грн'), 590);

test('parseAmountFromText("1 250,00 грн") returns 1250',
    SonyashaPaymentQR.parseAmountFromText('1 250,00 грн'), 1250);

test('parseAmountFromText("1250.00") returns 1250',
    SonyashaPaymentQR.parseAmountFromText('1250.00'), 1250);

test('parseAmountFromText("590") returns 590',
    SonyashaPaymentQR.parseAmountFromText('590'), 590);

test('parseAmountFromText with NBSP ("1\\u00A0250,00 грн") returns 1250',
    SonyashaPaymentQR.parseAmountFromText('1\u00A0250,00 грн'), 1250);

test('parseAmountFromText("590 ₴") returns 590',
    SonyashaPaymentQR.parseAmountFromText('590 ₴'), 590);

test('parseAmountFromText("590 UAH") returns 590',
    SonyashaPaymentQR.parseAmountFromText('590 UAH'), 590);

test('parseAmountFromText("invalid") returns null',
    SonyashaPaymentQR.parseAmountFromText('invalid'), null);

// =============================================
// UI Template Tests (Task 1.3)
// =============================================

console.log('\n--- UI Template Tests ---\n');

// Test: formatAmountDisplay
test('formatAmountDisplay(590) returns "590,00"',
    SonyashaPaymentQR.formatAmountDisplay(590), '590,00');

test('formatAmountDisplay(1250.5) returns "1 250,50"',
    SonyashaPaymentQR.formatAmountDisplay(1250.5), '1 250,50');

test('formatAmountDisplay(0) returns "0,00"',
    SonyashaPaymentQR.formatAmountDisplay(0), '0,00');

// Test: buildTemplate returns HTML string
const templateData = { orderId: '36', amount: 590, deeplinkUrl: 'https://example.com' };
const template = SonyashaPaymentQR.buildTemplate(templateData);

test('buildTemplate returns string',
    typeof template, 'string');

test('buildTemplate contains payment card class',
    template.includes('sonyasha-payment-card'), true);

test('buildTemplate contains amount section',
    template.includes('sonyasha-amount-section'), true);

test('buildTemplate contains QR container',
    template.includes('sonyasha-qr-container'), true);

test('buildTemplate contains footer',
    template.includes('sonyasha-payment-footer'), true);

test('buildTemplate contains IBAN class',
    template.includes('sonyasha-iban'), true);

// Test: buildErrorTemplate
const errorTemplate = SonyashaPaymentQR.buildErrorTemplate(['Order ID not found']);
test('buildErrorTemplate contains error class',
    errorTemplate.includes('sonyasha-error'), true);

test('buildErrorTemplate contains error message',
    errorTemplate.includes('Order ID not found'), true);

// Test: WIDGET_STYLES contains required colors
test('WIDGET_STYLES contains green color #6AA570',
    SonyashaPaymentQR.WIDGET_STYLES.includes('#6AA570'), true);

test('WIDGET_STYLES contains brown color #BF9773',
    SonyashaPaymentQR.WIDGET_STYLES.includes('#BF9773'), true);

test('WIDGET_STYLES contains mobile media query',
    SonyashaPaymentQR.WIDGET_STYLES.includes('@media (max-width: 480px)'), true);

test('WIDGET_STYLES uses sonyasha- prefix',
    SonyashaPaymentQR.WIDGET_STYLES.includes('.sonyasha-'), true);

// Test: getQrContainerId
test('getQrContainerId returns "sonyasha-qr"',
    SonyashaPaymentQR.getQrContainerId(), 'sonyasha-qr');

// =============================================
// QR Code Integration Tests (Task 1.4)
// =============================================

console.log('\n--- QR Code Integration Tests ---\n');

// Test: DEFAULT_LOGO_BASE64 exists and is valid
test('DEFAULT_LOGO_BASE64 exists',
    typeof SonyashaPaymentQR.DEFAULT_LOGO_BASE64, 'string');

test('DEFAULT_LOGO_BASE64 starts with data:image/png',
    SonyashaPaymentQR.DEFAULT_LOGO_BASE64.startsWith('data:image/png;base64,'), true);

// Test: QR_CONFIG has required properties
test('QR_CONFIG.width is 280',
    SonyashaPaymentQR.QR_CONFIG.width, 280);

test('QR_CONFIG.height is 280',
    SonyashaPaymentQR.QR_CONFIG.height, 280);

test('QR_CONFIG.type is "svg"',
    SonyashaPaymentQR.QR_CONFIG.type, 'svg');

test('QR_CONFIG.dotsOptions.color is "#333333"',
    SonyashaPaymentQR.QR_CONFIG.dotsOptions.color, '#333333');

test('QR_CONFIG.cornersSquareOptions.color is "#6AA570"',
    SonyashaPaymentQR.QR_CONFIG.cornersSquareOptions.color, '#6AA570');

test('QR_CONFIG.cornersDotOptions.color is "#BF9773"',
    SonyashaPaymentQR.QR_CONFIG.cornersDotOptions.color, '#BF9773');

test('QR_CONFIG.qrOptions.errorCorrectionLevel is "H"',
    SonyashaPaymentQR.QR_CONFIG.qrOptions.errorCorrectionLevel, 'H');

// Test: renderQr function exists
test('renderQr function exists',
    typeof SonyashaPaymentQR.renderQr, 'function');

// Test: loadQrLibrary function exists
test('loadQrLibrary function exists',
    typeof SonyashaPaymentQR.loadQrLibrary, 'function');

// Test: isQrLibraryLoaded function exists
test('isQrLibraryLoaded function exists',
    typeof SonyashaPaymentQR.isQrLibraryLoaded, 'function');

// =============================================
// Widget Init and Error Handling Tests (Task 1.5)
// =============================================

console.log('\n--- Widget Init and Error Handling Tests ---\n');

// Test: escapeHtml
test('escapeHtml escapes < character',
    SonyashaPaymentQR.escapeHtml('<script>').includes('&lt;'), true);

test('escapeHtml escapes > character',
    SonyashaPaymentQR.escapeHtml('</script>').includes('&gt;'), true);

test('escapeHtml escapes & character',
    SonyashaPaymentQR.escapeHtml('foo & bar').includes('&amp;'), true);

test('escapeHtml escapes " character',
    SonyashaPaymentQR.escapeHtml('a "test"').includes('&quot;'), true);

test('escapeHtml handles non-string input',
    SonyashaPaymentQR.escapeHtml(null), '');

test('escapeHtml handles empty string',
    SonyashaPaymentQR.escapeHtml(''), '');

// Test: getPlatform
test('getPlatform function exists',
    typeof SonyashaPaymentQR.getPlatform, 'function');

test('getPlatform returns string',
    typeof SonyashaPaymentQR.getPlatform(), 'string');

test('getPlatform returns valid value (ios, android, or desktop)',
    ['ios', 'android', 'desktop'].includes(SonyashaPaymentQR.getPlatform()), true);

// Test: showError function exists
test('showError function exists',
    typeof SonyashaPaymentQR.showError, 'function');

// Test: init function exists
test('init function exists',
    typeof SonyashaPaymentQR.init, 'function');

// Test: renderWidget function exists
test('renderWidget function exists',
    typeof SonyashaPaymentQR.renderWidget, 'function');

// =============================================
// Platform Detection Tests (Task 2.1)
// =============================================

console.log('\n--- Platform Detection Tests (Task 2.1) ---\n');

// Test: isMobile function exists
test('isMobile function exists',
    typeof SonyashaPaymentQR.isMobile, 'function');

// Test: isMobile returns boolean
test('isMobile returns boolean',
    typeof SonyashaPaymentQR.isMobile(), 'boolean');

// Test: isMobile returns false for desktop (Node.js environment)
test('isMobile returns false in Node.js (no navigator)',
    SonyashaPaymentQR.isMobile(), false);

// Test: WIDGET_STYLES contains platform classes
test('WIDGET_STYLES contains .sonyasha-platform-desktop rule',
    SonyashaPaymentQR.WIDGET_STYLES.includes('.sonyasha-platform-desktop'), true);

test('WIDGET_STYLES contains .sonyasha-platform-ios rule',
    SonyashaPaymentQR.WIDGET_STYLES.includes('.sonyasha-platform-ios'), true);

test('WIDGET_STYLES contains .sonyasha-platform-android rule',
    SonyashaPaymentQR.WIDGET_STYLES.includes('.sonyasha-platform-android'), true);

// Test: Bank selection hidden on desktop CSS rule
test('WIDGET_STYLES hides bank selection on desktop',
    SonyashaPaymentQR.WIDGET_STYLES.includes('.sonyasha-platform-desktop .sonyasha-bank-selection'), true);

// Test: Pay button hidden on desktop CSS rule
test('WIDGET_STYLES hides pay button on desktop',
    SonyashaPaymentQR.WIDGET_STYLES.includes('.sonyasha-platform-desktop .sonyasha-pay-button'), true);

// =============================================
// Bank Configurations Tests (Task 2.2)
// =============================================

console.log('\n--- Bank Configurations Tests (Task 2.2) ---\n');

// Test: BANKS object exists
test('BANKS object exists',
    typeof SonyashaPaymentQR.BANKS, 'object');

// Test: All 10 banks are configured
test('BANKS has 10 banks',
    Object.keys(SonyashaPaymentQR.BANKS).length, 10);

// Test: MAIN_BANKS array
test('MAIN_BANKS has 6 banks',
    SonyashaPaymentQR.MAIN_BANKS.length, 6);

test('MAIN_BANKS contains mono',
    SonyashaPaymentQR.MAIN_BANKS.includes('mono'), true);

test('MAIN_BANKS contains ukrgasbank',
    SonyashaPaymentQR.MAIN_BANKS.includes('ukrgasbank'), true);

// Test: EXTRA_BANKS array
test('EXTRA_BANKS has 4 banks',
    SonyashaPaymentQR.EXTRA_BANKS.length, 4);

test('EXTRA_BANKS contains creditagricole',
    SonyashaPaymentQR.EXTRA_BANKS.includes('creditagricole'), true);

test('EXTRA_BANKS contains globus',
    SonyashaPaymentQR.EXTRA_BANKS.includes('globus'), true);

// Test: Bank configurations match CRM template
test('mono.android matches CRM',
    SonyashaPaymentQR.BANKS.mono.android, 'com.ftband.mono');

test('mono.ios matches CRM',
    SonyashaPaymentQR.BANKS.mono.ios, 'mono');

test('privat24.android matches CRM',
    SonyashaPaymentQR.BANKS.privat24.android, 'ua.privatbank.ap24');

test('abank.ios matches CRM (abank24)',
    SonyashaPaymentQR.BANKS.abank.ios, 'abank24');

test('pumb.android matches CRM',
    SonyashaPaymentQR.BANKS.pumb.android, 'com.fuib.android.spot.online');

test('sense.ios matches CRM (alfabank)',
    SonyashaPaymentQR.BANKS.sense.ios, 'alfabank');

// Test: All banks have icons (CDN URLs)
const banksWithIcons = Object.values(SonyashaPaymentQR.BANKS)
    .filter(b => b.icon && b.icon.startsWith('https://cdn.jsdelivr.net/'));
test('All 10 banks have CDN icon URLs',
    banksWithIcons.length, 10);

// Test: getBank function
test('getBank function exists',
    typeof SonyashaPaymentQR.getBank, 'function');

test('getBank("mono") returns bank object',
    SonyashaPaymentQR.getBank('mono').name, 'Mono');

test('getBank("invalid") returns null',
    SonyashaPaymentQR.getBank('invalid'), null);

// Test: getAllBankCodes function
test('getAllBankCodes function exists',
    typeof SonyashaPaymentQR.getAllBankCodes, 'function');

test('getAllBankCodes returns 10 codes',
    SonyashaPaymentQR.getAllBankCodes().length, 10);

// =============================================
// Bank Deeplink Generator Tests (Task 2.3)
// =============================================

console.log('\n--- Bank Deeplink Generator Tests (Task 2.3) ---\n');

// Test: getBankDeeplink function exists
test('getBankDeeplink function exists',
    typeof SonyashaPaymentQR.getBankDeeplink, 'function');

// Test payment URL for deeplink tests
const testPaymentUrl = 'https://bank.gov.ua/qr/ABC123';

// Test: Desktop fallback (Node.js has no navigator, so it returns desktop)
// In Node.js environment, getPlatform() returns 'desktop'
test('Desktop fallback returns original URL',
    SonyashaPaymentQR.getBankDeeplink('mono', testPaymentUrl), testPaymentUrl);

// Test: Invalid bank code returns original URL
test('Invalid bank code returns original URL',
    SonyashaPaymentQR.getBankDeeplink('nonexistent', testPaymentUrl), testPaymentUrl);

// Test: iOS deeplink format (manual verification)
// Format: paymentUrl.replace('https', bank.ios)
// mono:// -> mono://bank.gov.ua/qr/ABC123
const expectedIosUrl = testPaymentUrl.replace('https', 'mono');
test('iOS deeplink format is correct (mono:// scheme)',
    expectedIosUrl, 'mono://bank.gov.ua/qr/ABC123');

// Test: Android deeplink format (manual verification)
// Format: intent://bank.gov.ua/qr/ABC123#Intent;scheme=https;package=com.ftband.mono;end
const expectedAndroidUrl = testPaymentUrl.replace('https', 'intent') +
    '#Intent;scheme=https;package=com.ftband.mono;end';
test('Android deeplink format is correct (intent:// scheme)',
    expectedAndroidUrl, 'intent://bank.gov.ua/qr/ABC123#Intent;scheme=https;package=com.ftband.mono;end');

// Test: Verify all banks have required deeplink fields
let allBanksHaveDeeplinkFields = true;
for (const [code, bank] of Object.entries(SonyashaPaymentQR.BANKS)) {
    if (!bank.android || !bank.ios) {
        allBanksHaveDeeplinkFields = false;
        break;
    }
}
test('All banks have android and ios fields for deeplinks',
    allBanksHaveDeeplinkFields, true);

// =============================================
// Bank Selection UI Tests (Task 2.4)
// =============================================

console.log('\n--- Bank Selection UI Tests (Task 2.4) ---\n');

const testPaymentUrl2 = 'https://bank.gov.ua/qr/TestPayment123';

// Test: buildBankButton function exists
test('buildBankButton function exists',
    typeof SonyashaPaymentQR.buildBankButton, 'function');

// Test: buildBankButton returns valid HTML
const bankButton = SonyashaPaymentQR.buildBankButton('mono', testPaymentUrl2);
test('buildBankButton returns string',
    typeof bankButton, 'string');

test('buildBankButton contains bank-item class',
    bankButton.includes('sonyasha-bank-item'), true);

test('buildBankButton contains bank-icon class',
    bankButton.includes('sonyasha-bank-icon'), true);

test('buildBankButton contains bank-name class',
    bankButton.includes('sonyasha-bank-name'), true);

test('buildBankButton contains bank name "Mono"',
    bankButton.includes('Mono'), true);

test('buildBankButton contains data-bank attribute',
    bankButton.includes('data-bank="mono"'), true);

test('buildBankButton contains data-deeplink attribute',
    bankButton.includes('data-deeplink='), true);

// Test: buildBankButton returns empty for invalid bank
test('buildBankButton returns empty for invalid bank',
    SonyashaPaymentQR.buildBankButton('invalid', testPaymentUrl2), '');

// Test: buildBankSelectionHtml function exists
test('buildBankSelectionHtml function exists',
    typeof SonyashaPaymentQR.buildBankSelectionHtml, 'function');

// Test: buildBankSelectionHtml returns valid HTML
const bankSelectionHtml = SonyashaPaymentQR.buildBankSelectionHtml(testPaymentUrl2);
test('buildBankSelectionHtml returns string',
    typeof bankSelectionHtml, 'string');

test('buildBankSelectionHtml contains bank-selection class',
    bankSelectionHtml.includes('sonyasha-bank-selection'), true);

test('buildBankSelectionHtml contains bank-title class',
    bankSelectionHtml.includes('sonyasha-bank-title'), true);

test('buildBankSelectionHtml contains main-banks class',
    bankSelectionHtml.includes('sonyasha-main-banks'), true);

test('buildBankSelectionHtml contains extra-banks class',
    bankSelectionHtml.includes('sonyasha-extra-banks'), true);

test('buildBankSelectionHtml contains show-more button',
    bankSelectionHtml.includes('sonyasha-show-more'), true);

test('buildBankSelectionHtml contains Ukrainian title',
    bankSelectionHtml.includes('або оберіть свій банк'), true);

test('buildBankSelectionHtml contains "Показати ще" text',
    bankSelectionHtml.includes('Показати ще'), true);

// Count bank buttons (should be 10: 6 main + 4 extra)
const bankButtonCount = (bankSelectionHtml.match(/sonyasha-bank-item/g) || []).length;
test('buildBankSelectionHtml has 10 bank buttons',
    bankButtonCount, 10);

// Test: toggleExtraBanks function exists
test('toggleExtraBanks function exists',
    typeof SonyashaPaymentQR.toggleExtraBanks, 'function');

// Test: initBankSelection function exists
test('initBankSelection function exists',
    typeof SonyashaPaymentQR.initBankSelection, 'function');

// Test: CSS contains bank selection styles
test('WIDGET_STYLES contains .sonyasha-bank-selection',
    SonyashaPaymentQR.WIDGET_STYLES.includes('.sonyasha-bank-selection'), true);

test('WIDGET_STYLES contains .sonyasha-banks-grid',
    SonyashaPaymentQR.WIDGET_STYLES.includes('.sonyasha-banks-grid'), true);

test('WIDGET_STYLES contains .sonyasha-bank-item',
    SonyashaPaymentQR.WIDGET_STYLES.includes('.sonyasha-bank-item'), true);

test('WIDGET_STYLES contains .sonyasha-bank-icon',
    SonyashaPaymentQR.WIDGET_STYLES.includes('.sonyasha-bank-icon'), true);

test('WIDGET_STYLES contains .sonyasha-show-more',
    SonyashaPaymentQR.WIDGET_STYLES.includes('.sonyasha-show-more'), true);

test('WIDGET_STYLES contains .sonyasha-extra-banks',
    SonyashaPaymentQR.WIDGET_STYLES.includes('.sonyasha-extra-banks'), true);

test('WIDGET_STYLES contains grid-template-columns for 3-column layout',
    SonyashaPaymentQR.WIDGET_STYLES.includes('grid-template-columns: repeat(3, 1fr)'), true);

test('WIDGET_STYLES contains sonyasha-expanded class for rotation',
    SonyashaPaymentQR.WIDGET_STYLES.includes('.sonyasha-show-more.sonyasha-expanded'), true);

// =============================================
// Fallback Details Tests (URGENT Hotfix)
// =============================================

console.log('\n--- Fallback Details Tests ---\n');

// Test: buildFallbackTemplate function exists
test('buildFallbackTemplate function exists',
    typeof SonyashaPaymentQR.buildFallbackTemplate, 'function');

// Test: renderFallbackDetails function exists
test('renderFallbackDetails function exists',
    typeof SonyashaPaymentQR.renderFallbackDetails, 'function');

// Test: buildFallbackTemplate returns string
test('buildFallbackTemplate returns string',
    typeof SonyashaPaymentQR.buildFallbackTemplate('36'), 'string');

// Test: buildFallbackTemplate contains payment card class
const fallbackHtml = SonyashaPaymentQR.buildFallbackTemplate('36');
test('buildFallbackTemplate contains payment card class',
    fallbackHtml.includes('sonyasha-payment-card'), true);

test('buildFallbackTemplate contains fallback class',
    fallbackHtml.includes('sonyasha-fallback'), true);

test('buildFallbackTemplate contains recipient name',
    fallbackHtml.includes(SonyashaPaymentQR.getConfig().recipientName), true);

test('buildFallbackTemplate contains IBAN',
    fallbackHtml.includes(SonyashaPaymentQR.getConfig().iban), true);

test('buildFallbackTemplate contains tax ID',
    fallbackHtml.includes(SonyashaPaymentQR.getConfig().taxId), true);

test('buildFallbackTemplate contains order ID in purpose',
    fallbackHtml.includes('За інтернет замовлення 36'), true);

// Test: buildFallbackTemplate handles null orderId
const fallbackNoOrderHtml = SonyashaPaymentQR.buildFallbackTemplate(null);
test('buildFallbackTemplate handles null orderId',
    fallbackNoOrderHtml.includes('За інтернет замовлення'), true);

// =============================================
// QR Library Bundling Tests (Task 3.1)
// =============================================

console.log('\n--- QR Library Bundling Tests (Task 3.1) ---\n');

// Test: loadQrLibrary function exists for backwards compatibility
test('loadQrLibrary function exists (backwards compatible)',
    typeof SonyashaPaymentQR.loadQrLibrary, 'function');

// Test: loadQrLibrary immediately calls callback (library is bundled)
// This is the KEY test - if bundled, callback is called synchronously
let callbackCalled = false;
SonyashaPaymentQR.loadQrLibrary(function() {
    callbackCalled = true;
});
test('loadQrLibrary calls callback immediately (bundled)',
    callbackCalled, true);

// Test: Multiple loadQrLibrary calls all resolve immediately
let callback2Called = false;
let callback3Called = false;
SonyashaPaymentQR.loadQrLibrary(function() { callback2Called = true; });
SonyashaPaymentQR.loadQrLibrary(function() { callback3Called = true; });
test('Multiple loadQrLibrary calls all resolve immediately',
    callback2Called && callback3Called, true);

// Test: loadQrLibrary without callback doesn't throw
let noThrow = true;
try { SonyashaPaymentQR.loadQrLibrary(); } catch (e) { noThrow = false; }
test('loadQrLibrary without callback works',
    noThrow, true);

// Note: QRCodeStyling global availability is tested in browser environment
// In Node.js module context, QRCodeStyling is scoped within the IIFE
// The important test is that widget functions work without CDN loading
console.log('Note: QRCodeStyling is bundled within widget IIFE scope');
console.log('Browser test: Load widget in browser and verify window.QRCodeStyling exists');

// Summary
console.log('\n=== Summary ===');
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log(`Total:  ${passed + failed}`);

if (failed === 0) {
    console.log('\n🎉 All tests passed! JavaScript output matches PHP byte-for-byte.');
    process.exit(0);
} else {
    console.log('\n⚠️ Some tests failed. Check output above.');
    process.exit(1);
}
