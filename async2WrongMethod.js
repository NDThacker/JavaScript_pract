
const tick = Date.now();

const timeSpent = (v) => {
	console.log(`${v}\nElapsed: ${Date.now() - tick}`)
}


const aBigTask = () => {
	return new Promise((resolve, reject) => {
		let iter = 0;
		while(iter < 1000000000)
		{
			iter++;
		}
		resolve('Done');
	})
}

timeSpent("sync1");

aBigTask().then(str => {
 timeSpent(str);
})

timeSpent("sync2");