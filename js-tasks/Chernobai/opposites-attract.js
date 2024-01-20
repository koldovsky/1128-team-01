// https://www.codewars.com/kata/5772da22b89313a4d50012f7/javascript

function lovefunc(flower1, flower2){
    return flower1 % 2 === 1 && flower2 % 2 === 0 || flower2 % 2 === 1 && flower1 % 2 === 0 ? true : false;
}