class Stock {
	constructor() {
		this.name = 'ABC';
		this.quantity = 10;
	}
	
	buy() {
		console.log('Stock [ Name: ' + this.name + ', Quantity: ' + this.quantity + ' ] bought');
	}
	
	sell() {
		console.log('Stock [ Name: ' + this.name + ', Quantity: ' + this.quantity + ' ] sold');
	}
}

class BuyStock {
	constructor(abcStock) {
		this.abcStock = abcStock;
	}
	
	execute() {
		this.abcStock.buy();
	}
}

class SellStock {
	constructor(abcStock) {
		this.abcStock = abcStock;
	}
	
	execute() {
		this.abcStock.sell();
	}
}

class Broker {
	constructor() {
		this.orderList = [];
	}
	
	takeOrder(order) {
		this.orderList.push(order);
	}
	
	placeOrders() {
		for(var i = 0; i < this.orderList.length; i++) {
			this.orderList[i].execute();
		}
		
		this.orderList = [];
	}
}

const abcStock = new Stock();

const buyStock = new BuyStock(abcStock);
const sellStock = new SellStock(abcStock);

const broker = new Broker();
broker.takeOrder(buyStock);
broker.takeOrder(sellStock);

broker.placeOrders();