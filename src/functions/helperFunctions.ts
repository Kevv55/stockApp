export const cleanMarketCap = (m) => {
  const mcap = m.toString();
  //   console.log(mcap[0]);
  if (mcap.length > 12) {
    return mcap[0] + "." + mcap[1] + " T";
  } else if (mcap.length > 9 && mcap.length < 12) {
    var num = "";
    var counter = 0;
    for (let i = mcap.length; i > 9; i--) {
      num += mcap[counter];
      counter += 1;
    }
    return num + " B";
  } else if (mcap.length > 6 && mcap.length < 9) {
    var num = "";
    var counter = 0;
    for (let i = mcap.length; i > 6; i--) {
      num += mcap[counter];
      counter += 1;
    }
    return num + " M";
  } else if (mcap.length > 3 && mcap.length < 6) {
    var num = "";
    var counter = 0;
    for (let i = mcap.length; i > 3; i--) {
      num = num.concat(mcap[counter]);
      //   console.log("For loop executed");
      counter += 1;
    }
    return num + " K";
  }
};
