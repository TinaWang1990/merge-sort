function merge(left, right) {
    var sortedArr = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedArr.push(left[0]);
            left = left.slice(1);
        } else {
            sortedArr.push(right[0]);
            right = right.slice(1);
        }
    }
    while (left.length) {
        sortedArr.push(left.shift());
    }
    while (right.length) {
        sortedArr.push(right.shift());
    }
    return sortedArr;
}

function sort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        var m = Math.floor(arr.length / 2);
        var left = arr.slice(0, m);
        var right = arr.slice(m, arr.length);
        return merge(sort(left), sort(right));
    }
}

var n = [100, 3, 2, 33, 9, 44, 5];
var test = sort(n);
console.log(test);