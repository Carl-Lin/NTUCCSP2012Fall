var arr = [1, '2', 3];
console.log(arr.map(function(ele){return ele*3}));
console.log(arr.filter(function(ele){return ele > 1}));
arr.forEach(function(ele, index){console.log('arr[' + index + ']=' + ele)});
console.log(arr.every(function(ele){return ele > 2}));
console.log(arr.some(function(ele){return ele > 2}));
console.log(arr.reduce(function(prev, curr){return prev + curr}));