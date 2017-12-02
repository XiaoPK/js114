function main(number) {
    let yourNumber = prompt("please input your number:",'');
    let result = [];
    let str= '';
    let countA = 0, countB = 0;
    for(let i in yourNumber){
        if(yourNumber[i] === number[i]){
            result.push(A);
        }else{
            result.push(B);
        }
    }
    for(let j in result){
        if(result[j] === 'A'){
            countA ++;
        }else{
            countB ++;
        }
    }
    str = countA + 'A' + countB + 'B';
    console.log(str);
    return str;
};

module.exports = { main}