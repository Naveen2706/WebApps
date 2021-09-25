const inputArr = [5,6,55,88,9,47];

exports.sort = function (inputArr) {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

exports.search = function binarySearch(inputArr, key){
    let start =exports.sort =  0;
    let end = inputArr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (inputArr[middle] === key) {
            // found the key
            return middle;
        } else if (inputArr[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return -1;
}