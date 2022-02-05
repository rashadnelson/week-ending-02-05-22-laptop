/*
function solution(string) {
    for(let i = 0; i < string.length; i++){
        if(string[i] === string[i].toUpperCase()) {
            console.log("Upper case letter detected")
        }
        else {
            console.log("No upper case letter detected.")
        }
    }
}

solution("camelCasing")
*/

function addThemNumbers(n1, n2, n3) {
    sum = n1 + n2 + n3
    return sum
}

let getAddThemNumbers = addThemNumbers(3, 4, 7)
console.log(getAddThemNumbers)
