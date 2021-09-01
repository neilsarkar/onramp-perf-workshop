const alot = 100000000;
const some = 10000;

for (var i = 0; i < alot; i++) {
	i * i;
}

for (var i = 0; i < alot; i++) {
	Math.sqrt(i);
}

for (var i = 0; i < alot; i++) {
	Math.random();
}

for (var i = 0; i < alot; i++) {
	var now = new Date();
}

for (var i = 0; i < some; i++) {
	var span = document.createElement('span', {})
	// span.innerHTML = "yo ";
	// span.appendChild(document.createTextNode('yo '))
	document.body.appendChild(span);
}

for (var i = 0; i < some; i++) {
	var spans = document.querySelectorAll('span')
}