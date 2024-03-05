function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const suffix = getCurrentYear();
  return {
    [`income-${suffix}`]: income,
    [`gdp-${suffix}`]: gdp,
    [`capita-${suffix}`]: capita,
  };
}
