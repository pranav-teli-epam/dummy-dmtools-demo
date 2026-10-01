const { calculateDiscount } = require('../src/math.js');
const assert = require('assert');

let passed = 0;
let failed = 0;

function test(description, fn) {
    try {
        fn();
        console.log(`✓ ${description}`);
        passed++;
    } catch (error) {
        console.error(`✗ ${description}: ${error.message}`);
        failed++;
    }
}

function assertThrows(fn, expectedMessage) {
    let threw = false;
    let err;
    try {
        fn();
    } catch (e) {
        threw = true;
        err = e;
    }
    assert.ok(threw, `Expected error "${expectedMessage}" but no error was thrown`);
    assert.strictEqual(err.message, expectedMessage);
}

console.log('Running tests for calculateDiscount...\n');

// Happy path
test('calculateDiscount(100, 20) === 80', () => {
    assert.strictEqual(calculateDiscount(100, 20), 80);
});

test('calculateDiscount(200, 50) === 100', () => {
    assert.strictEqual(calculateDiscount(200, 50), 100);
});

test('calculateDiscount(100, 0) === 100 (zero discount)', () => {
    assert.strictEqual(calculateDiscount(100, 0), 100);
});

test('calculateDiscount(100, 100) === 0 (full discount)', () => {
    assert.strictEqual(calculateDiscount(100, 100), 0);
});

// Multiple items — verify formula holds across a range
test('calculateDiscount(50, 10) === 45', () => {
    assert.strictEqual(calculateDiscount(50, 10), 45);
});

test('calculateDiscount(300, 25) === 225', () => {
    assert.strictEqual(calculateDiscount(300, 25), 225);
});

// Input validation — negative price
test('throws when price is negative', () => {
    assertThrows(() => calculateDiscount(-1, 20), 'Price cannot be negative');
});

test('throws when price is -100', () => {
    assertThrows(() => calculateDiscount(-100, 0), 'Price cannot be negative');
});

// Input validation — discount out of bounds
test('throws when discountPercent is -1', () => {
    assertThrows(() => calculateDiscount(100, -1), 'Discount percent must be between 0 and 100');
});

test('throws when discountPercent is 101', () => {
    assertThrows(() => calculateDiscount(100, 101), 'Discount percent must be between 0 and 100');
});

test('throws when discountPercent is 200', () => {
    assertThrows(() => calculateDiscount(100, 200), 'Discount percent must be between 0 and 100');
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
