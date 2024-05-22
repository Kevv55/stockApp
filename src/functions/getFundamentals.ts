export const getFundamentalsData = async (symbol) => {
  try {
    const KEY = "com0sfpr01qqra7gbgn0com0sfpr01qqra7gbgng";
    const URL = `https://finnhub.io/api/v1/stock/metric?symbol=${symbol}&metric=all&token=${KEY}`;
    const res = await fetch(URL);
    if (res.status == 200) {
      const data = await res.json();
      return data;
    } else {
      return "error";
    }
  } catch (err) {
    console.log("Error getting fundamentals");
    return "error";
  }
};
