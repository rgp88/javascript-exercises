let b ;
const repeatString = function(text,num) {
    if(num == 0) {
        b = "";
    } else if(num <0) {
        b = "ERROR" 
    } else {
    b = text;    
    for (let i=1;i<num;i++) {
        b += text;
    }
}
    return b;

};

// Do not edit below this line
module.exports = repeatString;
