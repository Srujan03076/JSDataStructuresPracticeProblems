let numbers = [];

for (var i = 0; i < 100; i++) {
    var str = i.toString().split('');
    //console.log(str);
    if (str[0] == str[1]) {
        numbers.push(i);
    }
}

console.log(numbers);