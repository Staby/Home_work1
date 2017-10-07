
      // var Upper = document.getElementsByTagName("li")
      // for (var i = 0; i < Upper.length; i++) {
      // 	var koza = Upper[i].textContent;
      // 	Upper[i].textContent=koza.replace('the new generation of iPhone', 'The new generation of iPhone');
      // }
	// var Upper = document.getElementsByTagName("li")[4]
	//       for (var i = 0; i < Upper.length; i++) {
	//       	var koza = Upper[i].textContent;
	//       	Upper[i].textContent=koza.replace('the new generation of iPhone', 'The new generation of iPhone');
	//       }
			// Upper.innerText = capitalizeFirstLetter(text);

//      var Upper = document.getElementsByTagName("li");
//       var text = Upper.innerText;
// 	for (var i = 0; i < Upper.length; i++) {
// 		if(Upper[i].nextElementSibling !=document.body){
//       console.log(Upper[i])
//   }
// }
//       function capitalizeFirstLetter(text) {
//       		return text.charAt(0).toUpperCase() + text.slice(1);
//     }
// 		Upper.innerText = capitalizeFirstLetter(text);

	      var Upper = document.getElementsByTagName("li");
	      for (var i = 0; i < Upper.length; i++) {
	      	var texss = Upper[i].textContent;
	      	Upper[4].textContent = texss.replace('the new generation of iPhone', 'The new generation of iPhone')
	      	Upper[7].textContent = texss.replace('the new generation of iPhone', 'The new generation of iPhone')
	      	Upper[10].textContent = texss.replace('the new generation of iPhone', 'The new generation of iPhone')
	      }


//2
	var span = document.getElementsByTagName('span')
					      for (var i = 0; i < span.length; i++) {
					      	span[i].classList.add('rad');
					      }
					      //3
		var newUl = document.createElement('ul');
	      newUl.innerHTML = "<h4>iPhone 5</h4><ul><li>Our Hero</li><li>Price: <span>300$</span></li></ul>"
	      document.body.appendChild(newUl);
	      document.getElementsByTagName('span')[4].classList.add('rad')
	      //4

	      document.getElementsByTagName('ul')[6].classList.add('device');
	      //5


	       var h4 = document.getElementsByTagName('h4');
	      for (var i = 0; i < h4.length; i++) {
	      	var texts = h4[i].textContent;
	      		h4[i].textContent=texts.replace('iPhone', 'Android');     	
	      }
	      document.getElementsByTagName('ul')[9].classList.add('device');
	      //6
	//       for (var i = 0; i < span.length; i++) {
	//       	var price = document.getElementsByTagName('span').textContent;
	//       	voccv = document.getElementsByTagName('span').textContent;
	// 		 voccv = currency.convert(symbola(price));
	//       }

	// 		  function symbola(price){
	// 		var symbol = price.indexOf("$");
	// 		var symboli = price.slice(0, symbol);
	// 			return symboli;
	// 		}
	// 
