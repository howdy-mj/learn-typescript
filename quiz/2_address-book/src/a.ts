function fetchItems(): string[] {
  const items = ['a', 'b', 'c'];
  return items;
}
const result = fetchItems();

function fetchItemsPromise(): Promise<string[]> {
  const items = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
