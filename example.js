var async = require('async');

let array = [3, 4, 5, 6, 7, 7, 8, 9];
// async function tryIt() {
// 	await async.forEach(array,(ele, done) => {
// 		console.log(ele); done();
// 		setTimeout(() => { console.log("nothing") }, 400)
// 	}, () => { });
// }
// tryIt();

async function generateArray(arr) {
	for (let ind = 0; ind < 10; ind++) {
		arr.push(ind);
	}
	console.log("in between")
	setTimeout(() => { console.log("waiting") }, 2000);
	return arr;
}

async function tryIt() {

	let arr = []
	console.log("before await");
	for(let ind = 0; ind < 5; ind ++)
		arr = await generateArray(arr);
	console.log("after await");
	console.log(arr);
}
tryIt();
// if(array.length)
// 	console.log("true")

