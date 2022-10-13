const fibonacci = function(a) {
    let fib = 0;    
    let fibprev = 1;
    let fibprev2 = 1;
    if (a<0) return "OOPS";
    for (i=1;i<=a;i++) {
    fibprev2 = fibprev;
    fibprev = fib;
    fib = fibprev2 + fibprev;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
