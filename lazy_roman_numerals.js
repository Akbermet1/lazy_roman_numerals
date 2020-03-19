//PSEUDOCODE for lazy roman numerals

//input: digit base ten
//output: number in a form of roman numeral

//Step 1: define a lazyRomanNum function


function lazyRomanNum(digit){

    let total, result

    if(digit > 0 && digit <= 5){
        result = "I"
        if(digit === 1){
            return result
        } else if(digit === 5){
            return "V"
        } else{
            for(total = 1; total < digit; total++){
                result = result.concat("I")
            }
        }

        return result
    }

    if(digit > 5 && digit <= 10){
        result = "V"
        if(digit === 10){
            return "X"
        } else {
            for(total = 5; total < digit; total++){
                result = result.concat("I")
            }
        }

        return result
    }

    if(digit > 10 && digit <= 50){
        result = "X"
        if(result === 50){
            return "L"
        } else {
            if(digit % 10 === 0){
                for(total = 10; total < digit; total += 10){
                    result = result.concat("X")
                }
            }
        }

        return result
    }

    if( digit > 50 && digit <= 100){
        result = "L"
        if(digit === 100){
            return "C"
        }

        if(digit % 10 === 0){
            for(total = 50; total < digit; total += 10){
                result = result.concat("X")
            }
        }

        return result
    }

    if(digit > 100 && digit <= 500 ){
        result = "C"
        if(digit === 500){
            return "D"
        }
        if(digit % 100 === 0){
            for(total = 100; total < digit; total += 100){
                result = result.concat("C")
            }
        }

        return result
    }

    if(digit > 500 && digit <= 1000){
        result = "D"
        if(digit === 1000){
            return "M"
        }
    }
}


console.log(lazyRomanNum(70))
