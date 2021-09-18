function isLeapYear(year){
    const result = year % 4;
    const result1 = year % 400;
    if (result == 0 && result1 == 0){
        return true;
    }
    else{
        return false;
    }
}

const yourYear = isLeapYear(2000);
console.log(yourYear);