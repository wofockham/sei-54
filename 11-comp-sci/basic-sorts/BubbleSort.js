function bubbleSort(array) {
    let needToIterate = true;

    let end = array.length - 1;

    while (needToIterate) {
        needToIterate = false; // assume we are done
        for (let i = 0; i < end; i++) {
            if (array[i] > array[i+1]) {
                // destructuring parallel assignment: [a, b] = [b, a];
                [array[i], array[i+1]] = [array[i+1], array[i]];
                needToIterate = true;
            }
        }
        end--;
    }

    return array;
}

module.exports = bubbleSort;