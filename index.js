let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

//1
let temperatures = [22, 26, 19, 30, 23, 28, 17, 31];
function filterHighTemperatures(ele) {
  return ele > 25;
}
app.get('/high-temperatures', (req, res) => {
  let result = temperatures.filter(ele => filterHighTemperatures(ele));
  res.json(result);
});
//high-temperatures

//2
let prices = [80, 120, 95, 150, 60, 110];
function filteLowPrice(ele) {
  return ele <= 100;
}
app.get('/low-prices', (req, res) => {
  let result = prices.filter(ele => filteLowPrice(ele));
  res.json(result);
});
//low-prices

//3
let ratings =  [4.2, 3.8, 2.5, 4.7, 3.0, 4.9, 3.6];
function filterHighRatings(ele) {
  return ele > 3.5;
}
app.get('/high-ratings', (req, res) => {
  let result = ratings.filter(ele => filterHighRatings(ele));
  res.json(result);
});
//high-ratings

//4
let indianNames = ['Akshay', 'Priyanka', 'Arjun', 'Anushka', 'Rajesh', 'Kavita'];
function filterLongIndianNames(ele) {
  return ele.length > 6;
}
app.get('/long-indian-names', (req, res) => {
  let result = indianNames.filter(ele => filterLongIndianNames(ele));
  res.json(result);
});
//long-indian-names

//5
let productPrices = [10, 25, 50, 75, 100, 150, 200];
function filterCheaperProducts(ele, filterParam) {
  return ele < filterParam;
}
app.get('/cheaper-products', (req, res) => {
  let filteParam = parseFloat(req.query.filterParam);
  let result = productPrices.filter(ele => filterCheaperProducts(ele, filteParam));
  res.json(result);
});
//cheaper-products?filterParam=100
