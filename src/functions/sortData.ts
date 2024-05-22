export const sortCountries = (importance: any, results: any) => {
  var new_results = results.sort((a, b) => {
    return importance[a.country] - importance[b.country];
  });

  return new_results;
};
