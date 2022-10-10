const removeFromArray = function(a,b,c,d,e) {
    if (b === undefined || a.indexOf(b)<0) {
        a;
    } else {
        a.splice(a.indexOf(b),1);
    }

    if (c === undefined || a.indexOf(c)<0) {
        a;
    } else {
        a.splice(a.indexOf(c),1);
    }

    if (d === undefined || a.indexOf(d)<0) {
        a;
    } else {
        a.splice(a.indexOf(d),1);
    }

    if (e === undefined || a.indexOf(e)<0) {
        a;
    } else {
        a.splice(a.indexOf(e),1);
    }
    return a;
};



// Do not edit below this line
module.exports = removeFromArray;
