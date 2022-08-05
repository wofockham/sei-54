function insertionSort (items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // Find the position to insert this item:
    for (var j = i-1; j >= 0 && items[j] > item; j--) {
      items[j+1] = items[j]; // swap
    }
    items[j+1] = item; // actual insertion
  }

  return items;
}

module.exports = insertionSort;
