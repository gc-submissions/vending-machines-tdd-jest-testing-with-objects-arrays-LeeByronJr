const formatCurrency = (amount) => {
  const formatted = Math.abs(Math.round(amount * 100) / 100).toFixed(2);
  if (amount < 0) {
    return `-$${formatted}`;
  }
  return `$${formatted}`;
};

const getCoins = (cents) => {
  const change = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 };
  while (cents > 0) {
    if (cents >= 25) {
      change.quarters++;
      cents -= 25;
    } else if (cents >= 10) {
      change.dimes++;
      cents -= 10;
    } else if (cents >= 5) {
      change.nickels++;
      cents -= 5;
    } else {
      change.pennies++;
      cents--;
    }
  }
  return change;
};

module.exports = { formatCurrency, getCoins };
