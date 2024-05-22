export const fetchDataTwelve = async (symbol: any, interval: any) => {
  try {
    const KEY = "397cd2365e3a49ecb413801238af7895";
    const URL = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&apikey=${KEY}`;
    let res = await fetch(URL);
    console.log(res.status);
    if (res.status == 200) {
      let data = await res.json();
      return data;
    } else {
      return "default";
    }
  } catch (error) {
    console.log("Failure: ", error);
  }
};
