// function test1(n)
// {
//    if (n==1)
//       return;
//    for (i=1; i<=n; i++)
//        for (j=n; j>=1; j--)
//            console.out("*");
// }
// time complexity  O(n2)
// space complexity O(1)
//
//
//  function test2( n)
// {
//    let a = 0;
// for (i = 0; i < n; i++)
//    for (j = n; j > i; j--)
//        a = a + i + j;
// }
// time complexity  O(n2)
// space complexity O(1)
//
//
//
// function test3( n)
// {
//    let i, j, a = 0;
// for (i = n/2; i <=n; i++)
//    for (j = 2; j <=n; j=j*2)
//        a=a+n/2;
// }
// time complexity  O(n)
// space complexity O(1)
//
//
// function test4( n)
// {
//    let a = 0, i = n;
// while (i > 0) {
//    a += i;
//    i /= 2;
// }
// }
// time complexity  O(log n)
// space complexity O(1)

const arr = [1,2,3,2,1];
const key = 0;

function search(arr, key) {
let start = 0;
let end = arr.length - 1;

if (arr.length === 0) {
    return -1;
}

while (start <= end) {
let middle = Math.round((start + end) / 2);
let value = arr[middle];

if (value === key) {
    return value;
}

if (value > key) {
    end = middle - 1;
}

else {
    start = middle + 1;
}

}

return 0;

}
console.log(search(arr, key));