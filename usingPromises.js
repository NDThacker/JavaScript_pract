//getFruit function will return a promise as it has labeled as 'async'
const getFruit1 = async(name) => {
	const fruits = {
		apple: "20cal",
		orange: "25cal",
		pineapple: "30cal"
	}
	return fruits[name];
}

// Same code without async keyword

const getFruit2 = (name) => {
	const fruits = {
		apple: "20cal",
		orange: "25cal",
		pineapple: "30cal",
		grapes: "10cal",
		mango: "40cal"
	}
	if(name in fruits) return Promise.resolve(fruits[name]);
	else return Promise.reject('wrong fruitname')
}

const mixFruits1 = () => {

	return getFruit1('apple').then(data => {
		return data;
	}).catch(errmsg => {
		console.log(errmsg);
	})

}

const mixFruits2 = () => {

	return getFruit2('strawberry').then(data => {
		return data;
	}).catch(errmsg => {
		console.log(errmsg);
	})

}


mixFruits1().then(data => {
	console.log(data);

})

mixFruits2().then(data => {
	if(data) console.log(data);

})



const mixFruitswithAwait = async () => {
	const f1 = await getFruit1('apple');
	const f2 = await getFruit1('pineapple');

	console.log('calories1', f1, 'calories2', f2);

}

mixFruitswithAwait();


const mixFruitswithAwaitVariation2 =  () => {
	const f1 = getFruit1('apple');
	const f2 = getFruit1('pineapple');

	return Promise.all([f1, f2]);
//same Promise.any, Promise.race are used
}

mixFruitswithAwaitVariation2().then(calArray => {
	for(let cals of calArray)
	{
		console.log(cals);
	}
})
