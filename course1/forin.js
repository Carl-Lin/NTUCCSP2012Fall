var obj = {
    a : 'AAA'
    , b : 'BBB' 
}
for(var key in obj) {
    console.log('obj[' + key + ']=' + obj[key]);    
}
obj.__proto__.c = 'CCC';
for(var key in obj) {
    console.log('obj[' + key + ']=' + obj[key]);    
}
console.log(Object.keys(obj));