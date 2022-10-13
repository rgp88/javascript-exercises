const sumAll = function(a,b) {
    let c = 0;
if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number") {
    return "ERROR"
} else if (a<b) {
    for (let i=a;i<=b;i++) {
        c += i;
    }
} else {
    for (let i=b;i<=a;i++) {
        c += i;
    }
}
return c;
};

// Do not edit below this line
module.exports = sumAll;
