let fancyNumber = 42; // Global Scope
function fishy (numberFromOutside) {
  return numberFromOutside; // ? 42
  numberFromOutside = 33; // ? 33
}
fishy (fancyNumber);
console.log(fancyNumber); // 42