import { formatCurrency } from "../utilities/formatCurrency";
import { priceAfterDiscount } from "../utilities/priceAfterDiscount";

export const calcItemPrice = (price, discountPercentage) =>
  formatCurrency(priceAfterDiscount(price, discountPercentage));

export const calcItemTotal = (price, discountPercentage, quantity) =>
  formatCurrency(priceAfterDiscount(price, discountPercentage) * quantity);
