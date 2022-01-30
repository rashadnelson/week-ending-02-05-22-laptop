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