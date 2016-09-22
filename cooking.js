function toCook() {
	
	var main = ['chicken', 'Rib', 'shrimp', 'hamster', 'chinchilla', 'iguana', 'turtle', 'lobster', 'clam', 'eggs', 'beans', 'spaghetti', 'pizza', 'Pork', 'Pheasant', 'Grous', 'Rabbit', 'Lamb', 'Veal'];
	var side = ['potato', 'carrots', 'onions', 'bacon', 'lentils', 'gravy', 'rice', 'bagel', 'liver', 'Granola', 'bread', 'honey', 'toast', 'crackers', 'soup', 'barf'];
	var technique = ['Braised', 'Stewed', 'Baked', 'Fried', 'Cured', 'Sauted', 'Seared', 'Barbeque', 'boiled', 'dried', 'pickled', 'roasted', 'Reduction', 'Wok Fried', 'Thickened'];
	
	var dish = main[Math.round(Math.random()*(main.length-1))];
	var plate = side[Math.round(Math.random()*(side.length-1))];
	var what = technique[Math.round(Math.random()*(technique.length-1))];
	
	document.getElementById('container').innerHTML = '<div>' + what + ' ' + dish + '<br> with ' + plate + '.</div>'
	
}