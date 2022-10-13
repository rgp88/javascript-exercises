const removeFromArray = function(a,...args) {
    for (let i of args) {
    if (a.indexOf(i)<0) {
        a;
    } else {
        a.splice(a.indexOf(i),1);
    }
}
    return a;
};



// Do not edit below this line
module.exports = removeFromArray;
