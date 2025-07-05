function stockList(books, categories) {
  if (!books.length || !categories.length) return '';
​
  const totals = {};
​
  categories.forEach(cat => totals[cat] = 0);
​
  books.forEach(book => {
    const [code, qtyStr] = book.split(' ');
    const category = code[0];
    const qty = parseInt(qtyStr, 10);
    if (totals.hasOwnProperty(category)) {
      totals[category] += qty;
    }
  });
​
  return categories.map(cat => `(${cat} : ${totals[cat]})`).join(' - ');
}