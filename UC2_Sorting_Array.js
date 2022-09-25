let num = Math.floor(Math.random()*900+100);
let NumArry = new Array();

function AddNumIntoArray (num)
{ return Math.floor(Math.random()*900+100)}

for (let i=0; i<10; i++)
{
    let num = Math.floor(Math.random()*900+100);
    NumArry.push(AddNumIntoArray(num))

}

let SortNum = NumArry.sort()
console.log(SortNum);

console.log("the Second Largest  Number is :" +SortNum[8]);
console.log("the Second Smallest  Number is :" +SortNum[1]);
