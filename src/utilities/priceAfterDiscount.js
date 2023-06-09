export const priceAfterDiscount = (price, discountRate) =>
  price - price * (discountRate / 100);
