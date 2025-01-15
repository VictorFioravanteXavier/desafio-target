const str: string = "cachorro";
let str_reverse: string = "";

for (let index = str.length-1; index >= 0; index--) {
    str_reverse += str[index]
}

console.log(str_reverse)