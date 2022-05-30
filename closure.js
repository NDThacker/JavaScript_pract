function f1() {
	let v1 = "hello";
	return function() {
		return v1;
	}
}


const retF = f1();
console.log(retF());