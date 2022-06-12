const STRING = "HELLO";

function reverse(str) {
  return str.split("").reverse().join("");
}

function reverse2(str) {
  let revStr = "";
  for (let i = 0; i < str.length; i++) {
    revStr = [...str[i], ...revStr];
  }
  return revStr.join("");
}

function reverse3(str) {
  let revStr = [];
  for (let i = 0; i < str.length; i++) {
    revStr.unshift(str[i]);
  }
  return revStr.join("");
}

function reverse4(str) {
  let revStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    revStr.push(str[i]);
  }
  return revStr.join("");
}

console.log(reverse(STRING));
console.log(reverse2(STRING));
console.log(reverse3(STRING));
console.log(reverse4(STRING));
