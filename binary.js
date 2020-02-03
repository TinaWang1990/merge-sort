var binarySearch = function(arr, x, start, end) {
    if (start > end) return -1;

    var mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) {
        return mid;
    }

    if (arr[mid] > x) {
        return binarySearch(arr, x, start, mid - 1);
    } else {
        return binarySearch(arr, x, mid + 1, end);
    }

};

var arr = [1, 3, 5, 7, 8, 9];
var x = 3;
var index = binarySearch(arr, x, 0, arr.length - 1);

if (index >= 0) {
    console.log(index);
} else {
    console.log("not exist");
}