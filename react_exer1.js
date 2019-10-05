let dataList = [{
	title: "Angels and Demons",
	Publisher: "Penguin Random House",
	Author: "Dan Brown",
	Price: 409,
	PrdoId: 2012
},
{
	title: "Norse Mythology",
	Publisher: "Bloomsbury Publishing",
	Author: "Neil Gaiman",
	Price: 300,
	ProdId: 2019
}
]

function aCard(dataList) {
	return (
		dataList.map((val, key) => {
			<div className="card">
				<div className="card-header">
				{val.title}
				</div>
			</div>
		})//form the required design
	)
}




function Display() {
	return (
		<React.Fragment>
			<div className="row">
				<div className="card-deck">
				{aCard()}
				</div>
			</div>
		</React.Fragment>
	);
}