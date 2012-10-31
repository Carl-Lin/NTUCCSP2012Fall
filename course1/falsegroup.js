var testgroup = [false, 0, "", null, undefined, NaN, Infinity, -Infinity];

for(var i = 0; i < testgroup.length; i++) {
    var target = testgroup[i];
    target ? console.log(target + ' is true') : console.log(target + ' is false');
}