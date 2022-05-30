if (undefined == null)
	console.log("huhh??");
if (null == 0)
	console.log("ok!");
if (null >= 0)
	console.log("what??");
if (null < 0)
	console.log("Really!!");
if (null > 0)
	console.log("IDC!!");
if (undefined >= 0)
	console.log("Enough");
if (undefined < 0)
	console.log("KMN!!");
let var1 = null;
if(var1 == undefined)
	console.log("Are You freakin kidding me??");
let empL = []

if([] == []) console.log("in true");
else console.log("in false");

if([] === []) console.log("in true");
else console.log("in false");


let arr = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

let newArr = [].concat(arr);
let newArr2 = Array.prototype.concat.apply([], arr);

console.log(newArr2);