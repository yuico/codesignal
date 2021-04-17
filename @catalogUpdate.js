function catalogUpdate(catalog, updates) {
  arr = [...catalog, ...updates];
  arr.sort();
  res = [];
  res.push(arr[0]);
  arr.map((d) =>
    res[res.length - 1][0] === d[0]
      ? res[res.length - 1].push(d[1])
      : res.push(d)
  );
  res.map((d, i) => d.sort());
  return res;
}

catalog = [
  ['Books', 'Classics', 'Fiction'],
  ['Electronics', 'Cell Phones', 'Computers', 'Ultimate item'],
  ['Grocery', 'Beverages', 'Snacks'],
  ['Snacks', 'Chocolate', 'Sweets'],
  ['root', 'Books', 'Electronics', 'Grocery'],
];

updates = [
  ['Snacks', 'Marmalade'],
  ['Fiction', 'Harry Potter'],
  ['root', 'T-shirts'],
  ['T-shirts', 'CodeSignal'],
];
console.log(catalogUpdate(catalog, updates));
//[["Books","Classics","Fiction"],
//  ["Electronics","Cell Phones","Computers","Ultimate item"],
//  ["Fiction","Harry Potter"],
//  ["Grocery","Beverages","Snacks"],
//  ["Snacks","Chocolate","Marmalade","Sweets"],
//  ["T-shirts","CodeSignal"],
//  ["root","Books","Electronics","Grocery","T-shirts"]]
