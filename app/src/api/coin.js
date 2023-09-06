const URL = "https://min-api.cryptocompare.com/data/pricemulti";
const currency = "USD";

export const getCoin = (tickers) => {
  const params = new URLSearchParams({
    tsyms: currency,
    fsyms: tickers.join(","),
  });

  return fetch(`${URL}?${params.toString()}`)
    .then((data) => data.json())
    .then((rawData) =>
      Object.fromEntries(
        Object.entries(rawData).map(([key, value]) => [key, value.USD])
      )
    );
};
