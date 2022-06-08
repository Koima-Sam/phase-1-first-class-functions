//Takes a callback function as an argument and calls back the function
function receivesAFunction(callBackFn){
    callBackFn();
}
//returns a named function
let namedFunction = function(){
    return '';
}
function returnsANamedFunction(){
    return namedFunction;
}
//returns anonymous function
function returnsAnAnonymousFunction(){
    return () => "anonymous function";
}