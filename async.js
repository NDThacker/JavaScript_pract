
const tick = Date.now();

const timeSpent = (v) => {
	console.log(`${v}\nElapsed: ${Date.now() - tick}`)
}


const aBigTask = () => {
	return Promise.resolve().then( _ => {
		let iter = 0;
		while(iter < 1000000000)
		{
			iter++;
		}
		return('Done');

	})
}

timeSpent("sync1");

aBigTask().then(str => {
 timeSpent(str);
})

timeSpent("sync2");