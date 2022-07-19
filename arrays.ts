let names: string[]=["Asrr", "W"];
let number: number[]=[1,2,3,4,5];
let user: [number, string]=[1, "Peter"];

let employee:{id:number, name:string}={id:1, name:"asar"};
let employee1:{id:number, readonly name?:string}={id:1};

const enum Size{Small=1, Medium=5, Large=8}
let mySize: Size= Size.Large;
console.log(mySize + "Size")

console.log(names);
let first=names[0];
console.log(first);
names.forEach(value => {
    console.log(value)
})