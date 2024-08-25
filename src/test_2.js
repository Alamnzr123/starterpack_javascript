function sortArray(arr) {
    let ascending = arr.slice();
    let descending = arr.slice();

    for (let i = 0; i < ascending.length; i++) {
        for (let j = i + 1; j < ascending.length; j++) {
            if (ascending[i] > ascending[j]) {
                let temp = ascending[i];
                ascending[i] = ascending[j];
                ascending[j] = temp;
            }
            if (descending[i] < descending[j]) {
                let temp = descending[i];
                descending[i] = descending[j];
                descending[j] = temp;
            }
        }
    }

    return { ascending, descending };
}
console.log(sortArray([10], [12]));

module.exports = { sortArray };