let v: any = true;

v = "string"; // no error as it can be "any" type

// v.runANonExistentMethod(); 
// no type error in the editor, but will still throw an error if commented in

console.log(Math.round(v)); // no error as it can be "any" type

/*
let u = true;
u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

*/