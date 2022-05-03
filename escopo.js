var myVariable = 'global';
myOtherVariable = 'global';
function myFunction(){
    var myVariable = 'local';
    return myVariable;

}

function myFunction(){
    myFunctionVariable = 'local';
    return myVariable;
}
console.log(myVariable); //{1}
console.log(myOtherVariable);
console.log(myOtherFunction);
console.log(myOtherVariable);
