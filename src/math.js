/**
 * Calculates the discounted price given the original price and discount percentage.
 * 
 * @param {number} price - Original price
 * @param {number} discountPercent - Discount percentage (0-100)
 * @returns {number} Final price after discount
 */
function calculateDiscount(price, discountPercent) {
    // BUG: Adds discount amount instead of subtracting, and doesn't validate percentage bounds
    return price + (price * discountPercent / 100);
}

module.exports = { calculateDiscount };
