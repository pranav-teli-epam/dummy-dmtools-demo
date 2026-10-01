const { calculateDiscount } = require('../src/math.js');
const assert = require('assert');

console.log('Running test for calculateDiscount...');
try {
    const originalPrice = 100;
    const discount = 20;
    const finalPrice = calculateDiscount(originalPrice, discount);
    
    assert.strictEqual(finalPrice, 80, `Expected 80 but got ${finalPrice}`);
    console.log('✓ Test passed: calculateDiscount(100, 20) === 80');
} catch (error) {
    console.error('✗ Test failed:', error.message);
    process.exit(1);
}
