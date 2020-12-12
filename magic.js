function fun(){
  	var nam = document.getElementById('name').value;
  	document.getElementById('n1').innerHTML = "Hello " + nam;
  	document.getElementById('for').style.display = 'none';
  	document.getElementById('for2').style.display = 'block';
}
function gun(){
	var k = document.getElementById('ques').value
	console.log(k);
	var array = ["\'It is certain\'","\'It is decidedly so\'","\'Reply hazy try again\'","\'Cannot predict now\'","\'Signs point to yes\'","\'My sources say no\'","\'Outlook not so good\'"];
	var i = Math.floor(Math.random() * 7);
	var x = array[i];
	document.getElementById('para').innerHTML = x;
}
console.log(document.getElementById('yes').checked)
function yes1(){
console.log(document.getElementById('yes').checked)
 if (document.getElementById('yes').checked) {
	document.getElementById('for3').style.display = 'block';
	document.getElementById('for2').style.display = 'none';
		var nam = document.getElementById('name').value;
  	document.getElementById('n2').innerHTML = "Hello " + nam;
	gun();
}
else{
	document.getElementById('for').style.display = 'block';
	document.getElementById('for2').style.display = 'none';
  	document.getElementById('for3').style.display = 'none';
  	document.getElementById('name').value = "";
  	document.getElementById('show').innerHTML = "You will try next Time!";
  } 
}
function num(){
	var i = Math.floor(Math.random() * 9);
	document.getElementById('numm').innerHTML = i;
}