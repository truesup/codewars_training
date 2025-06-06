"use strict";
​
function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}