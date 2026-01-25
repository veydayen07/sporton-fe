const priceFormatter = (price: number): string => {
  const newFormat = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(price);

  return newFormat;
};

export { priceFormatter };
