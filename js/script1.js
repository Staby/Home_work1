var ul = document.getElementsByTagName("ul");

 for (var i = 0; i < ul.length; i++) {

	    if (ul[i].parentElement != document.body) {

	      		var TextLi = ul[i].firstElementChild.textContent;
				ul[i].firstElementChild.textContent = capitalize(TextLi);
				var price = ul[i].lastElementChild.firstElementChild.textContent;
				ul[i].lastElementChild.firstElementChild.textContent = currency.convert(changeDolar(price));

	      	}
	      }

	      function capitalize(string) {
	      	var newZ = string[0].toUpperCase();
	      	var newX = string.replace(string[0],newZ);
	      	return newX;
	      }


//2

var span = document.getElementsByTagName('span');

for (var i = 0; i < span.length; i++) {
	span[i].classList.add('rad');
}


//3

 var newUl = document.createElement('ul');
	      newUl.innerHTML = "<h4>iPhone 5</h4><ul><li>Our Hero</li><li>Price: <span>300$</span></li></ul>";
	      document.body.appendChild(newUl);
	      document.getElementsByTagName('span')[4].classList.add('rad');
	     
 //4
	      document.getElementsByTagName('ul')[6].classList.add('device');
	      document.getElementsByTagName('ul')[9].classList.add('device');

//5

var h4 = document.getElementsByTagName('h4');
	      for (var i = 0; i < h4.length; i++) {
	      	var texts = h4[i].textContent;
	      		h4[i].textContent=texts.replace('iPhone', 'Android');     	
	      }
	      


//6
	function changeDolar(price) {
		var change = price.indexOf('$');
		var notDolar = price.slice(0,change);
		return notDolar;
	}




