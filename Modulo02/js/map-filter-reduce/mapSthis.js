function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2;
    });
}

const NUMS = [2, 4, 6, 8, 10];

console.log(mapSemThis(NUMS));

console.log(NUMS);