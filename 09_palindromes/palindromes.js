const palindromes = function (text) {
    text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    text = text.replace(/\s{2,}/g," ");
    text = text.replace(/\s/g, '');
    text = text.toLowerCase();
    let arr = text.split("");
    let nr = Math.floor(arr.length/2);
    let arr1 = [];
    let arr2 = [];
    for (i=0;i<nr;i++) {
        arr1.push(arr[i]);
    }
    for (i=arr.length-1;i>=arr.length-nr;i--) {
        arr2.push(arr[i]);
    }
    return(arr1.join() === arr2.join());
};

// Do not edit below this line
module.exports = palindromes;
