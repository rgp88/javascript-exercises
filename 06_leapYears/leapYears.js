const leapYears = function(ly) {
if (ly%400===0 && ly%100===0){
    return true;
} else if (ly%4===0) {
    return true;
} else {
    return false;
}
};

// Do not edit below this line
module.exports = leapYears;
