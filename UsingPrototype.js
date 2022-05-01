
Array.prototype.max = function() {
	return this[0];
}

/* 
Array.prototype.max = () => {
	return this[0];
} wont work*/


let newArr = new Array()
newArr.push(1);
newArr.push(2);

console.log(newArr.max());

console.log([1, 2, 3].max());
