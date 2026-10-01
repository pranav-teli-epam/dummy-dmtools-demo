/**
 * Calculates the discounted price given the original price and discount percentage.
 * 
 * @param {number} price - Original price
 * @param {number} discountPercent - Discount percentage (0-100)
 * @returns {number} Final price after discount
 */
function calculateDiscount(price, discountPercent) {
    if (price < 0) throw new Error('Price cannot be negative');
    if (discountPercent < 0 || discountPercent > 100) throw new Error('Discount percent must be between 0 and 100');
    return price - (price * discountPercent / 100);
}

module.exports = { calculateDiscount };
