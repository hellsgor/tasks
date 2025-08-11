const products = [
  { name: 'Телефон', category: 'Электроника', price: 1500 },
  { name: 'Наушники', category: 'Электроника', price: 500 },
  { name: 'Чехол', category: 'Аксессуары', price: 300 },
  { name: 'Ноутбук', category: 'Электроника', price: 45000 },
  { name: 'Рюкзак', category: 'Аксессуары', price: 1200 },
  { name: 'Мышка', category: 'Электроника', price: 700 },
];

const maxPrice = 2000;

const result = Object.entries(
  products.reduce((acc, { name, category, price }) => {
    if (price >= maxPrice) return acc;

    const group = acc[category] ?? (acc[category] = { names: [], sum: 0 });
    group.names.push(name.toLocaleUpperCase('ru'));
    group.sum += price;

    return acc;
  }, {}),
)
  .map(([category, { sum, names }]) => ({
    category,
    sum,
    names: names.sort((a, b) => a.localeCompare(b, 'ru')),
  }))
  .sort((a, b) => b.sum - a.sum);

console.log(result);
