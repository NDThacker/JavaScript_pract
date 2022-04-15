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



const fNames = ['apple', 'orange', 'grapes'];

const getCaloriesV1 = async () => {
	for(const f of fNames)
	{
		let cals = await getFruit2(f);
		console.log('for', f, 'cals are', cals);
	}
}

getCaloriesV1();

const caloriesArr = fNames.map(f => getFruit2(f));

const getCaloriesV2 = async function () {

	for await (let cals of caloriesArr)
	{
		console.log(cals);
	}
}

getCaloriesV2();